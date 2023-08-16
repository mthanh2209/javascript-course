let a = 2;

const add = a + 2;
const subtraction = a - 2;
const division = a / 2;
const remainder = a % 2;
const multiplication = a * 2;
const exponentiation = a ** 2;
const precedence = 1 * a + ((5 / a) % a);

console.log(
  add +
    "\n" +
    subtraction +
    "\n" +
    division +
    "\n" +
    remainder +
    "\n" +
    multiplication +
    "\n" +
    exponentiation +
    "\n" +
    precedence
);
