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

//obj propertype: thêm thuộc tính bên ngoài hàm tạo
//khi output thì kh nhận đc giá trị truyền vào
function Animal(name, leg, speed) {
  (this.name = name), (this.leg = leg), (this.speed = speed);
}
Animal.prototype.sex = "male";

var animal1 = new Animal("dog", 4, "fast");
var animal2 = new Animal("turtle", 4, "slow");

console.log(animal1.sex);
console.log(animal2);
