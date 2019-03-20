// destructuring arrays
const hobbies = ['cooking', 'music', 'coding'];

const [hobby1, ...rest] = hobbies;

console.log(rest);

// destructuring objects

const user = {
  nickname: 'Bob',
  password: 'bob123',
  age: 63,
  state: 'OK'
};

const { password, ...also } = user;

console.log(also);
console.log(password);
