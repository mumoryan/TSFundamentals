class MyEngine {
    constructor(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
}
class Car {
    constructor(engine) {
        this.engine = engine;
    }
    get engine() {
        return this.engine;
    }
    set engine(value) {
        if (value == undefined)
            throw 'Please supply an engine';
        this._engine = value;
    }
    // When  you are inside of a class you dont include the function keyword
    start() {
        alert("Car engine started " + this._engine.engineType);
    }
}
window.onload = () => {
    var engine = new MyEngine(300, "V8");
    var car = new Car(engine);
    alert(car.engine.engineType);
    car.start();
};
//# sourceMappingURL=car.js.map