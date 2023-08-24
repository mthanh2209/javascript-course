//input
const inputElement = document.querySelector('input[type="text"]');

inputElement.oninput = function (e) {
  console.log(e.target.value);
};

//checkbox
const checkboxElement = document.querySelector('input[type="checkbox"]');

checkboxElement.onchange = function (e) {
  console.log(e.target.checked);
};

//select
const selectElement = document.querySelector("select");

selectElement.onchange = function (e) {
  console.log(e.target.value);
};

//keyup/ keydown
const inputEvent = document.querySelector('input[type="text"]');

inputEvent.onkeyup = function (e) {
  console.log(e.code);
};
