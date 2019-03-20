"use strict";
var double = function (v) {
    return v * 2;
};
var greet = function (name) {
    if (name === void 0) { name = 'Joe'; }
    return "The name is " + name;
};
var numArr = [-2, 33, 38, 5];
var min = Math.min.apply(Math, numArr);
console.log(min);
var newArr = [55, 20];
var nextArr = numArr.concat(newArr);
console.log(nextArr);
var testResults = [3.89, 2.99, 1.38];
console.log.apply(console, testResults);
var scientist = { firstName: 'Will', experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName);
