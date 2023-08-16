// regular function
function getData() {
  return "hi!";
}
console.log(getData());

// another regular function
function myFunc(theArr) {
  theArr[0] = 30;
}
const arr = [45];
console.log(arr[0]); // 45

myFunc(arr);
console.log(arr[0]); // 30

//function scope
const num1 = 20;
const num2 = 3;
const name = "Thanh";

function multiply() {
  return num1 * num2;
}
console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 4;
  const num2 = 5;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }
  return add();
}
console.log(getScore()); // "Thanh scored 9"

//arrow function
const foods = ["Banana", "Chips", "Grapes", "Jam"];
console.log(foods.map((food) => food.length)); // output: [6, 5, 6, 3]

let age = 5;
let welcome = age < 18 ? () => console.log("Baby") : () => console.log("Adult");

welcome(); // Baby
