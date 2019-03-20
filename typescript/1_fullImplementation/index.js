"use strict";
var Greeting = /** @class */ (function () {
    function Greeting(greeting) {
        this.greeting = greeting;
    }
    Greeting.prototype.greet = function () {
        return this.greeting;
    };
    return Greeting;
}());
var greets = new Greeting('world');
var button = document.createElement('button');
button.textContent = 'Say Hello';
button.onclick = function () {
    alert(greets.greet());
};
document.body.appendChild(button);
