function BankAccount(customerName, balance = 0) {
   this.customerName = customerName;
   this.accountNumber = Date.now();
   this.balance = balance;

   this.deposit = function (amount) {
     this.balance += amount;
   }
}

const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    console.log(account)
})
// debugger;

// const JohnAccount = new BankAccount("John", 5000); // constructor function

// console.log(JohnAccount)

// JohnAccount.deposit(8000);


