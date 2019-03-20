"use strict";
// create a contract that sets forth minimum requirements for parameters and methods in functions or objects and guarantee the code that these methods are available
function callRunner(val) {
    console.log(val.name + "'s speed is " + val.speed + "mph");
}
function fasterRunner(val) {
    val.speed += 1;
    console.log("Go " + val.name + "!");
}
var runner1 = {
    name: 'Bob',
    speed: 16
};
var runner2 = {
    name: 'Sam',
    speed: 18
};
callRunner(runner1);
callRunner(runner2);
fasterRunner(runner1);
fasterRunner(runner1);
fasterRunner(runner1);
callRunner(runner1);
