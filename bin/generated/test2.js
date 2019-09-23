var test;
(function (test) {
    class Families {
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
    }
    class Castles {
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
    }
    const httpEndpoints = {};
    function registerEndpoint(constructor) {
        const className = constructor.name;
        const endpointPath = "/" + className.toLowerCase();
        httpEndpoints[endpointPath] = new constructor();
    }
    registerEndpoint(Families);
    registerEndpoint(Castles);
    console.log(httpEndpoints); // {"/families": Families, "/castles": Castles}
    httpEndpoints["/families"].get(); // ["Lannister", "Targaryen"]
})(test || (test = {}));
//# sourceMappingURL=test2.js.map