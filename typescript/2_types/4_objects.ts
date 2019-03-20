// in objects, names matter as well as key types.

let user = {
  name: 'John',
  password: '1234'
};

// the following is error because names don't match:

// user = {
//   a: 'Pete',
//   b: '43212'
// };

let username: { name: string; lastName: string };

username = { name: 'Bob', lastName: 'Jones' };

console.log(username);
