// simply write export infront of every variable and method to be made available for import in another file

const constant: number = 100;

export function makePercent(n: number): number {
  return n / constant;
}

export function makeBigger(n: number): number {
  return n * constant;
}
