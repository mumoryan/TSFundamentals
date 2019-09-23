var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// This decorator excercise follows the tutorial listed in the url below
// https://medium.com/iqoqo-engineering/understand-typescript-decorators-in-5-minutes-26ffc6189082
var decorator;
(function (decorator) {
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
        let original = descriptor.value;
        descriptor.value = function (request) {
            if (request.token !== "123") {
                throw new Error("forbidden!");
            }
        };
        const className = target.constructor.name;
        protectedMethods.push(className + "." + propertyKey);
    }
    let Families = class Families {
        constructor() {
            this.houses = ["Lannister", "Targaryen"];
        }
        // Gets all the current houses
        get() {
            return this.houses;
        }
        // Adds new houses to the list
        post(request) {
            this.houses.push(request.body);
        }
    };
    __decorate([
        protect
    ], Families.prototype, "get", null);
    __decorate([
        protect
    ], Families.prototype, "post", null);
    Families = __decorate([
        registerEndpoint
    ], Families);
    let Castles = class Castles {
        constructor() {
            this.castles = ["Winterfell", "Casterly Rock"];
        }
        // Gets all the current castles
        get() {
            return this.castles;
        }
        // Adds new castles to the list
        post(request) {
            this.castles.push(request.body);
        }
    };
    __decorate([
        protect
    ], Castles.prototype, "get", null);
    __decorate([
        protect
    ], Castles.prototype, "post", null);
    Castles = __decorate([
        registerEndpoint
    ], Castles);
    console.log(httpEndpoints); // {"/families": Families, "/castles": Castles}
    httpEndpoints["/families"].get(); // ["Lannister", "Targaryen"]
    console.log(protectedMethods); // ["Families.get", "Families.post"]
})(decorator || (decorator = {}));
//# sourceMappingURL=decorator.js.map