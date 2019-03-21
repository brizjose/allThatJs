// weak maps are also key-value collections, but the keys may only be JS objects, cannot be a primitive

// it holds weak references to the entries; able to get rid of those entries if not used  ... this saves memory, good for resource management and keeping apps lean

// Weak maps are not iterable because the size changes depending on state

let aceS = {
  name: 'Ace of Spades'
};

let kingH = {
  name: 'King of Hearts'
};

let as = { key: 1 };
let kh = { key: 2 };

let deck = new WeakMap([[as, aceS], [kh, kingH]]);

console.log(deck.get(as));
