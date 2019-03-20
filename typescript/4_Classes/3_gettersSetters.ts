// getters and setters allow for controlled access

// underscore is used by convention to differentiate the private property from a getter, setter or public value

class Plant {
  private _species: string = 'Default';

  get species() {
    return this._species;
  }

  set species(param: string) {
    if (param.length > 3) {
      this._species = param;
    }
  }
}

let plant1 = new Plant();
// using the getter
console.log(plant1.species);
// using the setter
plant1.species = 'AB';
console.log(plant1.species);
plant1.species = 'ABCD';
console.log(plant1.species);
