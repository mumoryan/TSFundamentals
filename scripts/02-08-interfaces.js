var demo_02_08;
(function (demo_02_08) {
    var squareItBasic = (num) => num * num;
    console.log('Square of 12 = ' + squareItBasic(12));
    //var squareIt: (rect: { h: number; w?: number; }) => number;
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    let p = {
        name: 'John',
        age: 10,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
            return msg + ', ' + this.name;
        }
    };
    let d = {
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
    function sessionEvaluator() {
        let ratings = [];
        let addRating = (input_rating = 5) => {
            ratings.push(input_rating);
        };
        let calcRating = () => {
            var sum = 0;
            ratings.forEach(function (score) {
                sum += score;
            });
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
    let s = sessionEvaluator();
    s.addRating(4);
    s.addRating(6);
    s.addRating(2);
    s.addRating(1);
    s.addRating(10);
    console.log(s.calcRating());
})(demo_02_08 || (demo_02_08 = {}));
//# sourceMappingURL=02-08-interfaces.js.map