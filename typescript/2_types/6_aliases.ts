// given a complex object, we can make it reusable by creating a type out of it

type Complex = { data: number[]; output: (all: any[]) => number };

let suma: Complex = {
  data: [1, 2, 3],
  output: data => {
    return data.reduce((tot, num) => {
      return tot + num;
    });
  }
};

let multi: Complex = {
  data: [1, 2, 3],
  output: data => {
    return data.reduce((tot, num) => {
      return tot * num;
    });
  }
};

let elevate: Complex = {
  data: [6, 2],
  output: data => {
    return data[0] ** data[1];
  }
};

console.log(suma.output(suma.data));
console.log(multi.output(multi.data));
console.log(elevate.output(elevate.data));
