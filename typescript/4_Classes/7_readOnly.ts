// two ways of setting readonly property to properties:

// 1. use "readonly" in front of the property:

class Unique {
  private static instance: Unique;

  private constructor(public readonly name: string) {}

  static getInstance() {
    if (!Unique.instance) {
      Unique.instance = new Unique('The Only One');
    }
    return Unique.instance;
  }
}

// 2. use a setter without a getter

class One {
  private static instance: One;
  public readonly name: string;

  private constructor(name: string) {
    this.name = name;
  }

  static getInstance() {
    if (!One.instance) {
      One.instance = new One('The Only One');
    }
    return One.instance;
  }
}
