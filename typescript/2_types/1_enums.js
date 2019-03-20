"use strict";
// enums are great to work with lists of things and use 'switch statements' to later get what was chosen.
var color;
(function (color) {
    color[color["Gray"] = 0] = "Gray";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
console.log(color.Green);
