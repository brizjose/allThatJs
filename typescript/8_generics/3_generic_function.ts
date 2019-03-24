// generic functions specify parameter and return types

function echo<T>(data: T) {
  return data;
}

const echo2: <T>(data: T) => T = echo;

function sum(arg1: number, arg2: number): number {
  return arg1 + arg2;
}
