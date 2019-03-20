// a complex object:

let complex: { data: number[]; output: (all: any[]) => number };

complex = {
  data: [1, 2, 3],
  output: function(all: any[]): number {
    return this.data.reduce((tot, d) => {
      return tot + d;
    });
  }
};

console.log(complex.data);
console.log(complex.output(complex.data));
