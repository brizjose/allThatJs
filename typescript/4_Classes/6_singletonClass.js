"use strict";
// singletons are classes of which you only have one instance at runtime.
// example, when you have an array that needs to be a single one that is used by the application
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// the constructor is private
// the instance will be created at runtime like this:
// let wrongWay = new OnlyOne("The Instance");
var rightWay = OnlyOne.getInstance();
console.log(rightWay);
