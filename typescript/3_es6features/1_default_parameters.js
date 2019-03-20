"use strict";
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
};
// can call the function without a parameter without getting undefined
countDown();
