"use strict";
// get access to properties and methods that have more general use but have been organized in an object
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.circumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.1416;
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.circumference(6));
