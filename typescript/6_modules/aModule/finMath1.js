"use strict";
// simply write export infront of every variable and method to be made available for import in another file
Object.defineProperty(exports, "__esModule", { value: true });
var constant = 100;
function makePercent(n) {
    return n / constant;
}
exports.makePercent = makePercent;
function makeBigger(n) {
    return n * constant;
}
exports.makeBigger = makeBigger;
