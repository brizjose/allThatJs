// class properties

// don't require prefix this
// can be public (default)
// private = only accessible withing the object
// protected = only accessible within the object and by inherited objects

// do not go in the constructor, go directly in the body

// properties in the constructor
// are the ones passed through when object is created
// if passed through the constructor and typed as public, they will automatically be 'reflected' in the class body, so no need to initialize them there (as in the below example of username, which basically is doing the same thing as name, but without having to declare in the body and then assign to this.name...)

// example

class Person {
  name: string;
  private skill!: string;
  protected age!: number;

  constructor(name: string, public username: string) {
    this.name = name;
  }
}

// how to use the object

const tatai = new Person('Manolo', 'manolo123');

console.log(tatai);
