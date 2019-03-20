"use strict";
// given a complex object, we can make it reusable by creating a type out of it
var suma = {
    data: [1, 2, 3],
    output: function (data) {
        return data.reduce(function (tot, num) {
            return tot + num;
        });
    }
};
var multi = {
    data: [1, 2, 3],
    output: function (data) {
        return data.reduce(function (tot, num) {
            return tot * num;
        });
    }
};
var elevate = {
    data: [6, 2],
    output: function (data) {
        return Math.pow(data[0], data[1]);
    }
};
console.log(suma.output(suma.data));
console.log(multi.output(multi.data));
console.log(elevate.output(elevate.data));
