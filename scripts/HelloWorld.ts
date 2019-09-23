class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}

Startup.main();

function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    public method() {
        console.log("method processed");
    }


}

let a = new C();
a.method();