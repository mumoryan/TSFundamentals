namespace demo_02_08 {
    interface SquareFunction {
        (x: number): number;
    }

    var squareItBasic: SquareFunction = (num: number) => num * num;

    console.log('Square of 12 = ' + squareItBasic(12));

    // Demo B
    // Pass an object literal as the parameter and use arrow functions
    interface Rectangle {
        h: number;
        w?: number;
    }

    //var squareIt: (rect: { h: number; w?: number; }) => number;
    var squareIt: (rect: Rectangle) => number;

    var rectA: Rectangle = { h: 7 };
    var rectB: Rectangle = { h: 7, w: 12 };

    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };

    interface Person {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    let p: Person = {
        name: 'John',
        age: 10,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years: number) {
            this.age -= years;
        },
        greet: function (msg: string) {
            return msg + ', ' + this.name;
        }
    };

    interface Creature {
        hasFur: boolean;
        getColor: () => string;
        breathe: () => { in: boolean, out: boolean };
    }

    let d: Creature = {
        hasFur: true,
        getColor: function () {
            return "white";
        },
        breathe: function () {
            return { in: false, out: true };
        }
    };

    let pets = p.calcPets();
    console.log('pets = ' + pets);

    p.makeYounger(10);
    let newAge = p.age;
    console.log('new age = ' + newAge);

    let msg = p.greet('Good day');
    console.log(msg);

    console.log("The creature test: Does it have fur? " + d.hasFur);
    console.log("The creature test: Get its color? " + d.getColor());
    console.log("The creature test: Can it breathe in? " + d.breathe().in);

    interface SessionEval {
        addRating: (rating: number) => void;
        calcRating: () => number;
    }

    function sessionEvaluator(): SessionEval {
        let ratings: number[] = [];
        let addRating = (input_rating: number = 5) => {
            ratings.push(input_rating);
        };
        let calcRating = () => {
            var sum: number = 0;
            ratings.forEach(function (score) {
                sum += score;
            });

            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        }
    }

    let s = sessionEvaluator();
    s.addRating(4);
    s.addRating(6);
    s.addRating(2);
    s.addRating(1);
    s.addRating(10);
    console.log(s.calcRating());
}