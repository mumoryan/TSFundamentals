class MyEngine {
    constructor(public horsePower: number, public engineType: string) { }
}

class Car {
    private _engine: MyEngine;

    constructor(engine: MyEngine) {
        this.engine = engine;
    }

    get engine(): MyEngine {
        return this.engine;
    }

    set engine(value: MyEngine) {
        if (value == undefined) throw 'Please supply an engine';
        this._engine = value;
    }

    // When  you are inside of a class you dont include the function keyword
    start(): void {
        alert("Car engine started " + this._engine.engineType);
    }
} 


window.onload = () => {
    var engine = new MyEngine(300, "V8");
    var car = new Car(engine);
    alert(car.engine.engineType);
    car.start();
}