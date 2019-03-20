"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this._acceleration = 0;
    }
    Object.defineProperty(Car.prototype, "acceleration", {
        get: function () {
            return this._acceleration;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.accelerate = function (n) {
        this._acceleration += 10;
    };
    Car.prototype.honk = function () {
        console.log('Toooot!');
    };
    return Car;
}());
var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// 2
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        if (width === void 0) { width = 2; }
        if (length === void 0) { length = 1; }
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectan = new Rectangle();
console.log(rectan.calcSize());
var rectan2 = new Rectangle(5, 2);
console.log(rectan2.calcSize());
// 3
var Dude = /** @class */ (function () {
    function Dude() {
        this._firstName = '';
    }
    Object.defineProperty(Dude.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (fn) {
            if (fn.length > 3) {
                this._firstName = fn;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Dude;
}());
var dudemon = new Dude();
dudemon.firstName = 'Ma';
console.log(dudemon.firstName);
dudemon.firstName = 'Maximilian';
console.log(dudemon.firstName);
