"use strict";
// a complex object:
var complex;
complex = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data.reduce(function (tot, d) {
            return tot + d;
        });
    }
};
console.log(complex.data);
console.log(complex.output(complex.data));
