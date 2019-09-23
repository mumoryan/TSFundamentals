//#region NaN equality checks
// Don't do this
console.log(NaN === NaN); // false!!
// Do this
console.log(Number.isNaN(NaN)); // true
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(-Number.MAX_VALUE); // -1.7976931348623157e+308
//#endregion
//#region Classes
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}
let p1 = new Point(0, 10);
let p2 = new Point(10, 20);
let p3 = p1.add(p2); // {x:10,y:30}
//#endregion
//#region Promises
let prom = function (imgStatus) {
    return new Promise((resolve) => {
        console.log(`Status: ${imgStatus}`);
        setTimeout(() => {
            resolve({ imgStatus: imgStatus });
        }, 1000);
    });
};
let upload;
let compress;
let transfer;
prom('uploading...')
    .then((res) => {
    upload = res;
    return prom('compressing...');
})
    .then((res) => {
    compress = res;
    return prom('transfering...');
})
    .then((res) => {
    transfer = res;
    return prom('Image upload completed.');
});
Promise.resolve(123)
    .then((res) => {
    console.log(res); // 123
    return 456;
})
    .then((res) => {
    console.log(res); // 456
    return Promise.resolve(123); // Notice that we are returning a Promise
})
    .then((res) => {
    console.log(res); // 123 : Notice that this `then` is called with the resolved value
    return 123;
});
//#endregion
//# sourceMappingURL=deepDive1.js.map