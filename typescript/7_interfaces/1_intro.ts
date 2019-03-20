// create a contract that sets forth minimum requirements for parameters and methods in functions or objects and guarantee the code that these methods are available

// think of them as reusable blueprints or tamplates for passing data to functions

interface Runner {
  name: string;
  speed: number;
}

function callRunner(val: Runner) {
  console.log(`${val.name}'s speed is ${val.speed}mph`);
}

function fasterRunner(val: Runner) {
  val.speed += 1;
  console.log(`Go ${val.name}!`);
}

const runner1 = {
  name: 'Bob',
  speed: 16
};
const runner2 = {
  name: 'Sam',
  speed: 18
};

callRunner(runner1);
callRunner(runner2);
fasterRunner(runner1);
fasterRunner(runner1);
fasterRunner(runner1);
callRunner(runner1);
