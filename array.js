const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); //3

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[0][0]); //1
console.log(matrix[2][0]); //7

// find a specific item in the array
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1; //12
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined
console.log([4, 5, 8, 12].find(isPrime)); // 5

const array = [0, 1, , , , 5, 6];
array.find((value, index) => {
  console.log("Visited index", index, "with value", value);
});
array.find((value, index) => {
  if (index === 0) {
    console.log("Deleting array[5] with value", array[5]);
    delete array[5]; //output: Deleting array[5] with value 5
  }
  console.log("Visited index", index, "with value", value);
});
/*output:
Visited index 0 with value 0
Visited index 1 with value 1
Visited index 2 with value undefined
Visited index 3 with value undefined
Visited index 4 with value undefined
Visited index 5 with value undefined
Visited index 6 with value 6 */
