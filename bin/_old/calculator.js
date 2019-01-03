window.onload = function () {
    var calc = new Calculator('X', 'Y', 'Output');
};
class Calculator {
    constructor(xId, yId, outputId) {
        this.x = document.getElementById(xId);
        this.y = document.getElementById(yId);
        this.output = document.getElementById(outputId);
        this.wireEvents();
    }
    wireEvents() {
        document.getElementById('Add').addEventListener('click', event => {
            this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value)).toString();
        });
        document.getElementById('Subtract').addEventListener('click', event => {
            this.output.innerHTML = this.subtract(parseInt(this.x.value), parseInt(this.y.value)).toString();
        });
    }
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
}
//# sourceMappingURL=calculator.js.map