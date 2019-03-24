// array as a generic type, exists:
var results = [5, 7, 9];
var testResults = [1.99, 2.33];
testResults.push(2.67);
console.log(testResults);
// elements of any type
function printIt(args) {
    args.forEach(function (el) { return console.log(el); });
}
function printAll(args) {
    args.forEach(function (el) { return console.log(el); });
}
printAll([3, 6, 0]);
printAll(['o', 'b', 'i']);
printIt([4, 5, 6]);
printIt(['c', 3, 'p', 0]);
