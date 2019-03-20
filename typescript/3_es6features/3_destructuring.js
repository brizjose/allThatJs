"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// destructuring arrays
var hobbies = ['cooking', 'music', 'coding'];
var hobby1 = hobbies[0], rest = hobbies.slice(1);
console.log(rest);
// destructuring objects
var user = {
    nickname: 'Bob',
    password: 'bob123',
    age: 63,
    state: 'OK'
};
var password = user.password, also = __rest(user, ["password"]);
console.log(also);
console.log(password);
