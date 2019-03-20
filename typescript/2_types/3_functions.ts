// setting function types

// set the structure and return type

let multiply: (a: number, b: number) => number;

function math(v1: number, v2: number): number {
  return v2 + v2;
}

function greet(arg: string, name: string): string {
  return `${arg} ${name}`;
}

multiply = math;
// multiply = greet; error!
