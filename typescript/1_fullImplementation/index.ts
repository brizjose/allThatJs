class Greeting {
  constructor(public greeting: string) {}
  greet() {
    return this.greeting;
  }
}

let greets = new Greeting('world');

let button = document.createElement('button');

button.textContent = 'Say Hello';

button.onclick = function() {
  alert(greets.greet());
};

document.body.appendChild(button);
