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
// can use the same name for the namespace as it is split in different files
// a solution is to compile them as a bundle in the tsc command
// like this: listing all the files:
// tsc outFile --fileApp.ts fileApp1.ts
// the best solution is to do imports
// but doing it like this requires import of each individual file when wanting to use the lib.
// syntax for namespaces is with 3 fwd slashes and <reference path="name of file.ts" />
// we still need to use the --outFile command in tsc
/// <reference path="1_basics.ts" />
var MyMath;
(function (MyMath) {
    function sqrtPI() {
        return Math.sqrt(MyMath.PI);
    }
    MyMath.sqrtPI = sqrtPI;
})(MyMath || (MyMath = {}));
console.log(MyMath.sqrtPI());
console.log(MyMath.calculateRectangle(3, 2));
