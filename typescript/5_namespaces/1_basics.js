"use strict";
// used to organize libraries of related variables and methods, like a mathemtical lib.z
// removes its members from the global scope
// requires export of members we want available for use outside
var MyMath;
(function (MyMath) {
    MyMath.PI = 3.1416;
    function calculateCircumference(diameter) {
        return diameter * MyMath.PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
console.log(MyMath.calculateCircumference(3));
console.log(MyMath.calculateRectangle(3, 5));
