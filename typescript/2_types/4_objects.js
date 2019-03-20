"use strict";
// in objects, names matter as well as key types.
var user = {
    name: 'John',
    password: '1234'
};
// the following is error because names don't match:
// user = {
//   a: 'Pete',
//   b: '43212'
// };
var username;
username = { name: 'Bob', lastName: 'Jones' };
console.log(username);
