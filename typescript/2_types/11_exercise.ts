type BankObject = {
  money: number;
  deposit: (v: number) => void;
};

type clientObject = {
  name: string;
  bankAccount: BankObject;
  hobbies: any[];
};

let bankAccount: BankObject = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let mySelf: clientObject = {
  name: 'Bob',
  bankAccount: bankAccount,
  hobbies: ['coding', 'music']
};

mySelf.bankAccount.deposit(3000);
console.log(mySelf);
