"use strict";
// rest and spread operators
// work with arrays and lists of data
var numbers = [1, 3, 5, 7];
// spread operator:  turns the array into a list of values
var result = Math.max.apply(Math, numbers);
console.log(result);
// rest operator combines a group of parameters into an array
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var myArray = makeArray(1, 3, 4);
console.log(myArray);
function makeModArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
// it does not breake if we explicitly separate parameters
console.log(makeModArray('Bob', 1, 2, 3, 4));
// but it shows error if parameter format does not match the function definition
// console.log(makeModArray(1,2,3));
// combine data into tuples to make more elegant function paramenters:
function comboOrig(name, age) {
    return "My name is " + name + " and I am " + age + " years old";
}
function comboMod() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return "My name is " + args[0] + " and I am " + args[1] + " years old";
}
console.log(comboOrig('Bob', 63));
console.log(comboMod('Bob', 63));
