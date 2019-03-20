// abstract classes are meant to never be instantiated, only extended by more specialized classes

// there are also abstract methods that provide type structures that are to be developed by the child classes

abstract class Project {
  projectName: string = 'Default';
  inflator: number = 0.05;
  // abstract members need to be implemented by children, otherwise there's an error
  abstract payroll(n: number): number;

  calcBudget(n: number) {
    return n * this.inflator;
  }
}

class ITProject extends Project {
  payroll(n: number) {
    return n * 6;
  }
}

const newProject = new ITProject();
console.log(newProject);
console.log(newProject.calcBudget(3));
console.log(newProject);
