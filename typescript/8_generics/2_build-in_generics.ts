// array as a generic type, exists:

const results: number[] = [5, 7, 9];

const testResults: Array<number> = [1.99, 2.33];

testResults.push(2.67);

console.log(testResults);

// elements of any type

function printIt(args: any[]) {
  args.forEach(el => console.log(el));
}

function printAll<T>(args: T[]) {
  args.forEach(el => console.log(el));
}

printAll<number>([3, 6, 0]);
printAll<string>(['o', 'b', 'i']);

printIt([4, 5, 6]);
printIt(['c', 3, 'p', 0]);
