class Doctor {
  private address: string = '';
  // initializing parameters from inside:
  protected age: number = 57;
  // auto-initialized properties from the constructor
  constructor(public name: string, public specialty: string) {}

  // accessing protected parameters from inside
  printAge() {
    console.log(this.age);
    this.setYearsSinceGrad();
  }
  // setter of private method from outside
  setAddress(address: string) {
    this.address = address;
    console.log('updated address: ', this.address);
  }
  // private methods can only be accessed from inside
  private setYearsSinceGrad() {
    console.log('years since graduation: ', this.age - 38);
  }
}

const doc = new Doctor('Manu', 'Dentist');
console.log('the doctor is ', doc);

// methods can access private and protected properties, but can't directly do doc.age or doc.address...
doc.printAge();
doc.setAddress('Guatemala City, GUA');

// INHERITANCE

// extending classes without a constructor and setting a default value for a parameter

class Dentist extends Doctor {
  specialty: string = 'Dentist';
}

const doc2 = new Dentist('Dude', 'obvious');
console.log(doc2);
doc2.setAddress('Great Plains, MN');

// extending with a consturctor, can rid of the need of parameters from parent class when they don't make sense at child level

class Psychiatrist extends Doctor {
  constructor(name: string) {
    super(name, 'Psychiatrist');
    // protected properties available through inheritance
    this.age = 54;
  }
  setAge(n: number) {
    this.age = n;
    console.log('updated age to: ', this.age);
  }
}

const doc3 = new Psychiatrist('Chen');
console.log(doc3);
doc3.setAddress('Xiang Xiong, Xhien');
doc3.setAge(43);
