"use strict";
// getters and setters allow for controlled access
// underscore is used by convention to differentiate the private property from a getter, setter or public value
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (param) {
            if (param.length > 3) {
                this._species = param;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant1 = new Plant();
// using the getter
console.log(plant1.species);
// using the setter
plant1.species = 'AB';
console.log(plant1.species);
plant1.species = 'ABCD';
console.log(plant1.species);
