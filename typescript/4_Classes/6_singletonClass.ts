// singletons are classes of which you only have one instance at runtime.

// example, when you have an array that needs to be a single one that is used by the application

class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

// the constructor is private

// the instance will be created at runtime like this:

// let wrongWay = new OnlyOne("The Instance");

let rightWay = OnlyOne.getInstance();
console.log(rightWay);
