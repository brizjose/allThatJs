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
var Doctor = /** @class */ (function () {
    // auto-initialized properties from the constructor
    function Doctor(name, specialty) {
        this.name = name;
        this.specialty = specialty;
        this.address = '';
        // initializing parameters from inside:
        this.age = 57;
    }
    // accessing protected parameters from inside
    Doctor.prototype.printAge = function () {
        console.log(this.age);
        this.setYearsSinceGrad();
    };
    // setter of private method from outside
    Doctor.prototype.setAddress = function (address) {
        this.address = address;
        console.log('updated address: ', this.address);
    };
    // private methods can only be accessed from inside
    Doctor.prototype.setYearsSinceGrad = function () {
        console.log('years since graduation: ', this.age - 38);
    };
    return Doctor;
}());
var doc = new Doctor('Manu', 'Dentist');
console.log('the doctor is ', doc);
// methods can access private and protected properties, but can't directly do doc.age or doc.address...
doc.printAge();
doc.setAddress('Guatemala City, GUA');
// INHERITANCE
// extending classes without a constructor and setting a default value for a parameter
var Dentist = /** @class */ (function (_super) {
    __extends(Dentist, _super);
    function Dentist() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.specialty = 'Dentist';
        return _this;
    }
    return Dentist;
}(Doctor));
var doc2 = new Dentist('Dude', 'obvious');
console.log(doc2);
doc2.setAddress('Great Plains, MN');
// extending with a consturctor, can rid of the need of parameters from parent class when they don't make sense at child level
var Psychiatrist = /** @class */ (function (_super) {
    __extends(Psychiatrist, _super);
    function Psychiatrist(name) {
        var _this = _super.call(this, name, 'Psychiatrist') || this;
        // protected properties available through inheritance
        _this.age = 54;
        return _this;
    }
    Psychiatrist.prototype.setAge = function (n) {
        this.age = n;
        console.log('updated age to: ', this.age);
    };
    return Psychiatrist;
}(Doctor));
var doc3 = new Psychiatrist('Chen');
console.log(doc3);
doc3.setAddress('Xiang Xiong, Xhien');
doc3.setAge(43);
