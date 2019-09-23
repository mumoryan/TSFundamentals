var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// This decorator excercise follows the tutorial listed in the url below
// https://medium.com/iqoqo-engineering/understand-typescript-decorators-in-5-minutes-26ffc6189082
var methodDecorator;
(function (methodDecorator) {
    const httpEndpoints = {};
    // All a decorator is, is a function that takes a class as an argument
    function registerEndpoint(constructor) {
        const className = constructor.name;
        const endpointPath = "/" + className.toLowerCase();
        httpEndpoints[endpointPath] = new constructor();
    }
    const protectedMethods = [];
    function protect(target, propertyKey, descriptor) {
        const className = target.constructor.name;
        protectedMethods.push(className + "." + propertyKey);
    }
    let Families = class Families {
        constructor() {
            this.houses = ["Lannister", "Targaryen"];
        }
        get() {
            return this.houses;
        }
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
    console.log(protectedMethods); // ["Families.get", "Families.post"]
})(methodDecorator || (methodDecorator = {}));
//# sourceMappingURL=methodDecorator.js.map