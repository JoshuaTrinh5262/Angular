"use strict";
exports.__esModule = true;
exports.Math = void 0;
var Math = /** @class */ (function () {
    function Math(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    Math.prototype.sum = function () {
        console.log('sum = ' + this.a + this.b + this.c + this.d);
    };
    Math.prototype.print = function () {
        console.log('a = ' + this.a);
        console.log('b = ' + this.b);
        console.log('c = ' + this.c);
        console.log('d = ' + this.d);
    };
    return Math;
}());
exports.Math = Math;
