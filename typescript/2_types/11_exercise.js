"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var mySelf = {
    name: 'Bob',
    bankAccount: bankAccount,
    hobbies: ['coding', 'music']
};
mySelf.bankAccount.deposit(3000);
console.log(mySelf);
