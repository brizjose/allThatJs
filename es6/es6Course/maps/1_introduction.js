// maps are used to make collections of objects

let aceS = {
  name: 'Ace of Spades'
};

let kingH = {
  name: 'King of Hearts'
};

// one way to populate the map
let deck = new Map([['as', aceS], ['kh', kingH]]);

const show = deck.values();
console.log(deck.size, show);
deck.delete('as');
console.log(deck.size, show);
deck.clear();
console.log(deck.size, show);

// another way to populate the map...
deck.set('as', aceS);
deck.set('kh', kingH);

for (key of deck.keys()) {
  console.log(key);
}
for (value of deck.values()) {
  console.log(value);
}
for (entry of deck) {
  console.log(entry);
}
