"use strict";
// two ways of setting readonly property to properties:
// 1. use "readonly" in front of the property:
var Unique = /** @class */ (function () {
    function Unique(name) {
        this.name = name;
    }
    Unique.getInstance = function () {
        if (!Unique.instance) {
            Unique.instance = new Unique('The Only One');
        }
        return Unique.instance;
    };
    return Unique;
}());
// 2. use a setter without a getter
var One = /** @class */ (function () {
    function One(name) {
        this.name = name;
    }
    One.getInstance = function () {
        if (!One.instance) {
            One.instance = new One('The Only One');
        }
        return One.instance;
    };
    return One;
}());
