// This decorator excercise follows the tutorial listed in the url below
// https://medium.com/iqoqo-engineering/understand-typescript-decorators-in-5-minutes-26ffc6189082
namespace decorator {
    const httpEndpoints = {};

    // All a class decorator is, is a function that takes a class as an argument
    function registerEndpoint(constructor) {
        const className = constructor.name;
        const endpointPath = "/" + className.toLowerCase();
        httpEndpoints[endpointPath] = new constructor();
    }

    const protectedMethods = [];

    // A method decorator takes a target, propertyKey, and descriptor
    function protect(target, propertyKey, descriptor) {
      // Logs to protectedMethods
      const className = target.constructor.name;
      protectedMethods.push(className + "." + propertyKey);

      const originalFunction = descriptor.value;
    
      descriptor.value = function(request) {
        if (request.token !== "123") {
          throw new Error("forbiden!");
        }
        const bindedOriginalFunction = originalFunction.bind(this);
        const result = bindedOriginalFunction(request);
        return result;
      };
    
      return descriptor;
    }
    @registerEndpoint
    class Families {
        private houses = ["Lannister", "Targaryen"];
        
        // Gets all the current houses
        @protect
        get(){
            return this.houses;
        }
        // Adds new houses to the list\
        post(request){
            this.houses.push(request.body);
        }
    }

    @registerEndpoint
    class Castles{
        private castles = ["Winterfell", "Casterly Rock"];

        // Gets all the current castles
        @protect
        get() {
          return this.castles;
        }
        // Adds new castles to the list\
        post(request) {
          this.castles.push(request.body);
        }
    }

    console.log(httpEndpoints); // {"/families": Families, "/castles": Castles}
    httpEndpoints["/families"].get({token: "123"}); // ["Lannister", "Targaryen"]
    //httpEndpoints["/families"].get({}) // Uncaught Error: forbiden!

    console.log(protectedMethods) // ["Families.get", "Families.post"]
}