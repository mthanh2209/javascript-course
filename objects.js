var num = 1;
var otherNum = num;

num = 2;
console.log(num); // 2
console.log(otherNum); // 1

var person = { name: "MongThanh" };
var otherPerson = person;

person.name = "Mong Thanh";
console.log(person.name); //Mong Thanh
console.log(otherPerson.name); //Mong Thanh

const car = {
  brand: "Ford",
  model: "Fiesta",
  start: function () {
    console.log(`Started ${this.brand} ${this.model}`);
  },
};
car.start();
