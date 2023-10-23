// let variable

// const name = "yewande"; //string
// let id = 6 //integer

// console.log(name + '')

// let sum = function sum (a, b){
//     return a + b;
// }
// 2+3; //5

// let x = 5
// let y = 3

// //addition
// console.log('x + y=', x+y);

// //subtraction
// console.log('x - y=',x-y);

// //multiplication
// console.log('x * y', x*y*x);

// //division
// console.log('x / y=', x/y);

// //bodmas
// console.log('x * y / x=', x*y/x)

// const a =2, b =3; console.log(a > b); //true

// console.log(2 == 2); //true
// console.log(2 == '2'); //true

// let #abc = "abc";
// console.log(#abc);

// let_abc = "abc";
// console.log(_abc);

// //Enabling strict mode
// "use strict";
// //Defining variables of different cases
// let abc = "bcd"
// let ABC = "efg"
// console.log(abc);
// console.log(ABC);
// console.log(abc ==ABC);

// let class= "class";
// console.log(class);

// const age = windows.prompt (enter your age);
// if (age >= 18) {
//     console.log("nick is an adult.");
// }
// else {
//     console.log("nick is a child.");
// }

// const size = 18;
// if (size >= 18){
//     console.log("it is big.");
// }
// else {
//     console.log("it is small.")
// }

// let a = window.prompt("enter a number");
// let b = window.prompt("enter a Number");
// let c = window.prompt("enter a Number");
// a = typeof (Number);
// b = typeof (Number);
// c = typeof (Number);

// let result = a + b + c;

// if (result == 12){
//     console.log("this is a dozen");
// }
// else{
//     console.log("this is just a number");
// }

// let sum(a + b + c) = 12;
// if{
//     (sum = 12 (prompt));
//     console.log("this is a dozen")
// }

// else{
//     (sum < 12 (prompt));
//     console.log("this is less")
// }

// parseInt

// const age = 51;

// if (age < 18) {
//     console.log("alice is under 18 years old.");
// }
// else if (age >= 18 && age <=21){
//     console.log("alice is between the ages of 18 and 21.");
// }
// else if (age >= 21 && age <=50){
//     console.log("alice is between the ages of 21 and 50years old.")
// }
// else {
//     console.log("alice is over 50years.")
// }

// const time = 22;

// if (time < 12){
//     console.log("Good Morning.")
// }
// else if (time >= 12 && time <= 18){
//     console.log("Good Afternoon")
// }
// else if (time >=18 && time <=24){
//     console.log("Good Night")
// }

// const variableNAme = parseInt(prompt("Enter time of day"));

// if (variableNAme < 10) {
//     console.log("Good Morning.")
// }
// else if (variableNAme < 20){
//     console.log("Good Afternoon.")
// }
// else{
//     console.log("Good Evening.")
// }

// const pet= "dog";

// if (pet === "lizard") {

// }

// const age = 22;
// const ownsCar = true;

// if (age >= 16 && ownsCar){
//     console.log("jerry is old enough to drive and has a car.");
// }
// else {
//     console.log("jerry does not drive.");
// }

// const boyfriendIsPaying = false;
// const isSale = true;

// if (boyfriendIsPaying || isSale){
//     console.log("Jesse will go shopping.")
// }
// else {
//     console.log("Jesse will not go shopping.");
// }

// Program to display text 5 times
// const n = 5;

//     //looping from i = 1 to 5
//     for (let i=1; i<= n; i++) {
//         console.log("I love Javascript.");
//     }

//     //program to display numbers from 1 to 5 const n =5;
//     //looping from i =1 to 5
//     // in each iteration, i is increased by 1 for (let i = 1; i <=n; i++)
//     for let i
//     {console.log("I love Javascript.");
//     // printing the value of i
// }

// let sum =0
// const n = prompt("enter any number");

// for (let i = 1; i <= n; i++)

// let sum = 0;
// const n =100

// (let i = 1; i > 0; i++)
// let i = 1, n=5;

// let i = 1 to 5 while (i <= n)
// {console.log (i); i += 1;}

// [1, 2].forEach(alert)

// alert("There will be an error")
// [1, 2].forEach(alert)

/*alert("All fine now");
[1, 2].forEach(alert)
 <Shift+Enter for a newline>
// ...your code
<Enter to run>


let admin, name; // can declare two variables at once
name = "John";
admin = name;
alert( admin ); // "John"

*/

// const greeting=(person)=>{
//     const name = person ? person.name: "stranger";
//     return 'Howdy, ${name}';
// };
// console.log(greeting({name:"Alice"}));
// console.log(greeting(null));

// const greeting = (person) => {
//     const name = person ? person.name : "stranger";
//     return `Howdy, ${name}`;
//   };

//   console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
//   console.log(greeting(null)); // "Howdy, stranger"

// const myHonda = {
//     color: "red",
//     wheels: 4,
//      model: [2021, 2022, 1997],

//     engine: {
//              cylinders: 4,
//              size: 2.2
//        },
//    speed: function() {
//          console.log("200km\h")
//    }
// };
// console.log(myHonda)

// function createcar {

//  const myHonda = {
//         color: "red",
//         wheels: 4,
//          model: [2021, 2022, 1997],

//         engine: {
//                  cylinders: 4,
//                  size: 2.2
//            },
//        speed: function() {
//              console.log("200km\h")
//        }
//     };
//     console.log(myHonda)
// }

// function humanPerson(name, age, gender, status, religion){
//     return(
//         name,
//         age,
//         gender,
//         status,
//         religion
//     );
// }

// function Car(color, wheels, year) {
//     this.color = color,
//     this.wheels = wheels,
//     this.year = year,
//     this.speed = function() {
//       console.log("200km/h")
//     }
//  }
//     const car1 = new Car("red", 4, 2011)
//     console.log(car1)
//     car1.speed()

// let breakfast = "coffee";
// let lunch = "Amala";
// let dinner = "eba"

// if (breakfast){
//     console.log("morning")
// }
// if (lunch){
//     console.log("afternoon")
// }
// if (dinner){
//     console.log("evening")
// }
// else{
//     console.log("lunch or dinner")

// let myArray = ["John", "fruit", true, 5]
// if (myArray){
//     for (let i=0; i < myArray.length; i++) {
//         console.log(myArray[i])
//     }
// }
// else{
//     console.log("Array is empty")
// }

// const age= parseInt(prompt("Enter your age"));
// const ownsCar = true;
// if (age >= 16 && ownsCar){
//     console.log("Jerry is old enough to drive and has his own car.");
// }
// else {
//     console.log("Jerry does not drive.");
// }

// let x = parseInt(prompt("Enter Value"));
// let y = parseInt(prompt("The value"))
// if (x++ > 20){
//     console.log("I'm more.");
// }
// if (x++ < 20){
//     console.log("I'm less");
// }
// if (y++ > 20){
//     console.log("He is more");
// }
// if (y++ < 20){
//     console.log("She is less");
// }

// const person = {
//     name: 'yewande',
//     email: 'yewande@yewande.com',
//     age: 25,
//     gender: "female",
//     profile: function() {
//     console.log(this.name + ' is a ' + this.gender + ' and she is ' + this.age + ' years old!')
//     }
//     }
//     person.occupation = "student"

//     console.log(person)

// let x = 10;
// let y = x;

// x = 20;
// console.log(y)

// let x = {value:10};
// let y = x

// x.value = 20;

// console.log(y)

// let number = 10;

// function increase(number) {
//     number++
// }
// increase(number);
// console.log(number)

// let obj = { value:10 };

// function increase(obj) {
// obj.value++
// }

// increase(obj);

// console.log(obj)

// const myHonda = {
//     color: "red",
//     wheels: 4,
//     engine: {
//       cylinders: 4,
//       size: 2.2
//     },
//     speed: function() {
//       console.log("200km/h")
//     }
//     };

//     for (let key in myHonda)
//     console.log(key)

// const myHonda = {
//     color: "red",
//     wheels: 4,
//     engine: {
//         cylinders: 4,
//         size: 2.2
//     },
//     speed: function() {
//         console.log("200km/h")
//     }
// };

// for (let key in myHonda)
// console.log(key, myHonda[key])

// const myHonda = {
//     color: "red",
//     wheels: 4,
//     engine: {
//         cylinders: 4,
//         size: 2.2
//     },
//     speed: function() {
//         console.log("200km/h")
//     }
// };

// for (let key of myHonda)
// console.log(key)

// const myHonda = {
//         color: "red",
//         wheels: 4,
//         engine: {
//             cylinders: 4,
//             size: 2.2
//         },
//         speed: function() {
//             console.log("200km/h")
//         }
//     };

//     for (let key of Object.keys(myHonda))
//     console.log(key)

// const myHonda = {
//     color: "red",
//     wheels: 4,
//     engine: {
//         cylinders: 4,
//         size: 2.2
//     },
//     speed: function() {
//         console.log("200km/h")
//     }
// };

// for (let ovie of Object.entries(myHonda))
// console.log(ovie)

// const myHonda = {
//     color: "red",
//     speed: function() {
//         console.log("200km/h")
//     }
// };

// const another = {}
// for (let key in myHonda)
// another[key] = myHonda[key]
// console.log(another)

// const myHonda = {
//     color: "red",
//     speed: function() {
//         console.loglog("200km/h")
//     }
// };

// const another = Object.assign({}, myHonda)
// console.log(another)

// const myHonda = {
//     color: "red",
//     speed: function() {
//         console.loglog("200km/h")
//     }
// };

// const another = { ...myHonda}
// console.log(another)

// function person(name, age, gender, occupation, country) {
//     return {
//       name,
//       age,
//       gender,
//       occupation,
//       country,
//       call() {
//         console.log(`Hi, I'm ${name}. I am ${age} years old and I work as a ${occupation} in ${country}.`);
//       }
//     };
//   };

//   const person1 = person("Alice", 30, "Female", "Engineer", "USA", "email@email");
//   const person2 = person("Bob", 25, "Male", "Teacher", "Canada","gmail@gmail");

//   person1.call();
//   person2.call();

// person1.email = "being"
// person2.email = "vitus"
// console.log(person1)
// console.log(person2)

// Constructor function for Account
// function Account(name, totalBalance, previousWithdrawal, todayWithdrawal, bankName, accountStatus) {
//     this.name = name;
//     this.totalBalance = totalBalance || 0;
//     this.previousWithdrawal = previousWithdrawal || 0;
//     this.todayWithdrawal = todayWithdrawal || 0;
//     this.bankName = bankName;
//     this.accountStatus = accountStatus;
//   }

//   Account.prototype.withdraw = function (withdrawalAmount) {

//     if (withdrawalAmount <= this.totalBalance) {

//       this.previousWithdrawal = withdrawalAmount;
//       this.todayWithdrawal += withdrawalAmount;

//       this.totalBalance -= withdrawalAmount;

//       return `Withdrawal of ₦${withdrawalAmount} successful. New balance is ₦${this.totalBalance}`;
//     } else {

//       return `Insufficient funds. Current balance is ₦${this.totalBalance}`;
//     }
//   };

//   const myAccount = new Account("Evans bomb", 10000, 0, 0, "shalili Bank", "Savings");

//   console.log(myAccount.withdraw(2000));
//   console.log(myAccount.withdraw(5000));
//   console.log(myAccount.withdraw(8000));

// const myCar= []
// let fruit = "orange";
// myCar.push(fruit)

// console.log(myCar)

// let car ="benz";
// myCar.push(car)

// let gift ="graft";
// myCar.unshift(gift)

// // let book ="TAGR";
// // mycar[3]='book';

// console.log(mycar);

// let x =[
//   ['jack', 24],
//   ['sara', 23,[true, 'apple']],
//   ['peter', 24]
// ];

// // console.log(x[0]);

// // console.log(x[0][0]);

// // console.log(x[1][2][1]);

// // console.log(x[1],[1][1])

// let studentsData = [['jack', 24], ['sara', 23],];
// studentsData.push(['peter', 24]);

// studentsData[1].push(['yewande', 25]);

// console.log(studentsData);

// let studentsData = [
//   ['jack', 24],
//   ['sara', 23],
//   ['evans', 28],
// ];

// studentsData.splice(2, 3, ['peter', 24]);

// console.log(studentsData);

// let result = [
//   {
//     id: 1,
//     name: "ovie",
//     course: "javascript",
//     paid: true
//   },
//   {
//     id: 2,
//     name: "Ayo",
//     course: "javascript",
//     paid: true
//   },
//   {
//     id: 3,
//     name: "jubril",
//     course: "php",
//     paid: true
//   }
// ]
// for( let a= 0; a < result.length; a++){
//   console.log(result[a])
// }

// let result = [
//   {
//     id: 1,
//     name: "ovie",
//     course: "javascript",
//     paid: false,
//     isPublished: true
//   },
//   {
//     id: 2,
//     name: "Ayo",
//     course: "php",
//     paid: true,
//     isPublished: false
//   },
//   {
//     id: 3,
//     name: "jubril",
//     course: "php",
//     paid: false,
//     isPublished: true
//   },
//   {
//     id: 4,
//     name: "jubril",
//     course: "php",
//     paid: true,
//     isPublished: true
//   },
//   {
//     id: 5,
//     name: "ay",
//     course: "php",
//     paid: false,
//     isPublished: false
//   }
// ]
// for( let a= 0; a < result.length; a++)

// {
//   if (result[a].paid === false && result[a].isPublished === false)
//   {
//     console.log(result[a])
//   }
// }

// let result = [
//   {
//     id: 1,
//     name: "ovie",
//     course: "javascript",
//     paid: false,
//     isPublished: true
//   },
//   {
//     id: 2,
//     name: "Ayo",
//     course: "php",
//     paid: true,
//     isPublished: false
//   },
//   {
//     id: 3,
//     name: "jubril",
//     course: "php",
//     paid: false,
//     isPublished: true
//   },
//   {
//     id: 4,
//     name: "jubril",
//     course: "php",
//     paid: true,
//     isPublished: true
//   },
//   {
//     id: 5,
//     name: "ay",
//     course: "php",
//     paid: false,
//     isPublished: false
//   }
// ]
// for( let a= 0; a < result.length; a++) {
//   if (result[a].paid === false) {
//     result[a].grade = "pass";
//     result[a].occupation = {
//       status: "student",
//       career: ["actor", "singer", "player"]
//     }
//   }
//   console.log(result[a])
// }

// let result = [
//   {
//       id: 1,
//       name: "ovie",
//       course: "javascript",
//       paid: false,
//       isPublished: true
//   },

//   {
//       id: 2,
//       name: "ayo",
//       course: "php",
//       paid: true,
//       isPublished: false
//   },

//   {
//       id: 3,
//       name: "jubril",
//       course: "php",
//       paid: true,
//       isPublished: true
//   },

//   {
//       id: 3,
//       name: "jubril",
//       course: "javascript",
//       paid: true,
//       isPublished: true
//   }
// ]

// for (let i = 0; i < result.length; i++) {
//   if (result[i].paid === false) {
//       result[i].grade = "pass";
//       result[i].occupation = {
//           status: "student",
//           occupation: ["player", "singer", "dancer"]
//       }
//   }
//   console.log(result[i])
// }

// function changeStatus(event) {
//   event.preventDefault()
// let mycourse = document.querySelector(".courses");
// for (let i = 0; i < mycourse.options.length; i++) {
//   if (mycourse.options[i].value === "javascript") {
//       mycourse.options[i].setAttribute('selected', 'selected')
//   }
// }
// }

// function changeStatus2(event) {
//   event.preventDefault()
// let mycourse = document.querySelector(".courses");
// for (let i = 0; i < mycourse.options.length; i++) {
//   mycourse.options[i].removeAttribute('selected', 'selected');
//   // location.reload();
// }
// }

// let names= {
//   fname: "Dillion",
//   lname: "Megida"
// }

// console.log(names.fname);
// console.log(names.hasOwnProperty("fname"));
// console.log(names);

// function DogObject(name, age){
//   let dog=Object.create(constructorObject);
//   dog.name =name;
//   dog.age=age;
//   return dog;
// }

// let constructorObject={
//   speak: function(){
//     return "I am a dog"
//   }
// }
// let bingo = DogObject("Bingo", 54);
// console.log(bingo)

// class Animals{
//   constructor(name, specie) {
//     this.name= name;
//     this.specie= specie;
//   }
//   sing() {
//     return '${this.name} can sing';
//   }
//   dance() {
//     return '${this.name} can dance';
//   }
//   jump() {
//     return '${this.name} can jump';
//   }
//   drink() {
//     return '${this.name} can drink';
//   }

// }
// let bingo= new Animals("Bingo", "Hairy");
// console.log(bingo);

// function Animals(name, specie) {
//   this.name= name;
//   this.specie= specie;
// }

// Animals.prototype.sing= function() {
//   return '${this.name} can sing';
// }
// Animals.prototype.dance= function() {
//   return '${this.name} can dance';
// }

// let bingo= new Animals("Bingo", "Hairy");
// console.log(bingo)

// sayHello();
// function sayHello() {}

// sayWelcome();
// const sayWelcome= function() {}

// const c = new Circle();
// class Circle {}

// const square = class {};

// function BankAccount(accountNumber, accountHolderName, balance) {
//   let _accountNumber = accountNumber;
//   let _accountHolderName = accountHolderName;
//   let _balance = balance;
//   function showAccountDetails() {
//     console.log(`Account Number: ${_accountNumber}`);
//     console.log(`Account Holder Name: ${_accountHolderName}`);
//     console.log(`Balance: ${_balance}`);
//   }
//   function deposit(amount) {
//     _balance += amount;
//     showAccountDetails();
//   }

//   function withdraw(amount) {
//     if (_balance >= amount) {
//       _balance -= amount;
//       showAccountDetails();
//     } else {
//       console.log("Insufficient Balance");
//     }
//   }
//   return {
//     deposit: deposit,
//     withdraw: withdraw,
//   };
// }
// let myBankAccount = BankAccount("123456789", "John Doe", 2000);
// myBankAccount.deposit(50000);
// myBankAccount.withdraw(20000);
// myBankAccount.showAccountDetails();

// class BankAccount {
//   constructor(accountNumber, accountHolderName, balance) {
//     this._accountNumber = accountNumber;
//     this._accountHolderName = accountHolderName;
//     this._balance = balance;
//   }
//   showAccountDetails() {
//     console.log(`Account Number: ${this._accountNumber}`);
//     console.log(`Account Holder Name: ${this._accountHolderName}`);
//     console.log(`Balance: ${this._balance}`);
//   }
//   deposit(amount) {
//     this._balance += amount;
//     this.showAccountDetails();
//   }

//   withdraw(amount) {
//     if (this._balance >= amount) {
//       this._balance -= amount;
//       this.showAccountDetails();
//     } else {
//       console.log("Insufficient Balance");
//     }
//   }
// }
// let myBankAccount = new BankAccount("123456", "John Doe", 1000);
// myBankAccount.deposit(5000);
// myBankAccount.withdraw(3000);

// class Car {
//   constructor(color, speed){
//     this._speed= speed;
//     this._color= color;
//   }
// }

// class BMW extends Car {
//   constructor(color, speed, make) {
//     super(color, speed);
//     this._make=make;
//   }
//   showInfo() {
//     console.log("I'm " + this._make + ", my color is " + this._color + ", and my speed is " + this._speed);
//   }
// }

// let myBMW= new BMW('Green', '40mph', 'BMW');
// console.log(myBMW.showInfo()); 


// document.getElementById("demo").innerHTML = "Hello World! ovie";

// login.prototype.logUser= function() {
//   this.submitBtn.addEventListener("click", ()=>{
//     if (this.email.value !== "" && this.password.value !== "") {

//       localStorage.setItem("userMail", this.email.value)
//       localStorage.setItem("userPass", this.password.value)

//       alert("user logged in with: " +  localStorage.getItem("userMail"))
//     }
//     else {
//       alert("Please enter email and password");
//     }
//   })
// }
// const user = new login();
// user.logUser();

// function partyPlanner(mainDish, ...sideDishes) {
//   console.log(`Main dish: ${mainDish}`);
//   console.log(`Side dishes: ${sideDishes.join(', ')}`);
// }

// partyPlanner( "Jollof rice", "Fufu", "Pizza", "Salad", "Kpomo", "Fries");
// Output:
// Main dish: Jollof rice
// Side dishes: Fufu, Pizza, Salad, Kpomo, Fries

//Destructure function parameter

function printPersonInfo({ firstName, lastName, age, sex }) {
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`sex: ${sex}`)
}

const person = {
  firstName: 'Cas',
  lastName: 'Nuel',
  age: 305,
  sex: 'male'
};

printPersonInfo(person);

function factorial(n) {
  // Base condition: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case: call the function with a smaller sub-problem
  return n * factorial(n - 1);
}

const num = 5;
const result = factorial(num);
console.log(`Factorial of ${num} is ${result}`);

function outer() {
  const outerVar = "I'm from outer function!";
  
  function inner() {
    console.log(outerVar);  // Accessing the outer variable
  }

  inner();
}

outer();  // Output: I'm from outer function

function rememberMe() {
  const secret = "Hello! I'm a secret!";
  return function() {
    console.log(secret);  // This inner function remembers the 'secret'
  };
}

const myClosure = rememberMe();
myClosure();  // Output: I'm a secret!

function counter() {
  let count = 30;
  return function() {
    return ++count;
  };
}

const increment = counter();
console.log(increment());  // Output: 1
console.log(increment());  // Output: 2
console.log(increment());  // Output: 2
console.log(increment());  // Output: 2


// (it ran a loop)

function first() {
  console.log("Hello from first!");
  second(), third();  // Calling another function
}

function second() {
  console.log("Hello from second!");
}
function third() {
  console.log("Hello from third!")
}

first();  // Output: Hello from first! Hello from second!

function oops() {
  myVariable = "I'm global!";  // Oops, forgot 'var', 'let', or 'const'!
}

oops();
console.log(myVariable);  // Output: I'm global!

const x = 10;
const y = 20;

function shadowExample() {
  const x = 3;  // This 'x' is different from the outer 'x'
  console.log(x);  // Output: 5
}

shadowExample();
console.log(x);  // Output: 10


//encapsulation method.
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
  return baseSalary + (overTime * rate);
}

let employee = {
  baseSalary: 30_000,
  overTime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + (this.overTime * this.rate);
  }
};

console.log(employee.getWage());

const circle = {
  radius: 1,
  location:{
    x: 2,
    y: 2
  },
  draw: function() {
    console.log('great');
  }
};

circle.draw();

function outerFunction() {
  function innerFunction() {
     console.log('Hello from the inner function!');
  }
 
  innerFunction();
 }
 
 outerFunction(); // Output: Hello from the inner function!

