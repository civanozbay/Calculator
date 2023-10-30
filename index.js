const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["/", "+", "*", "-"];
const res = document.querySelector("#res");
let fNumber = [];
let sNumber = [];
let operator = "";
let temp = [];

function getNumber(element) {
  const firstNumber = document.createElement("span");
  firstNumber.textContent = element.value;
  res.appendChild(firstNumber);
  fNumber.push(firstNumber.textContent);
}

function getOperator(element) {
  temp.push(...fNumber);
  const selectedOperator = document.createElement("span");
  selectedOperator.textContent = element.value;
  res.appendChild(selectedOperator);
  operator += selectedOperator.textContent;
  fNumber = [];
}

function calculate(first, second) {
  const secondNumber = fNumber.join("");
  const firstNumber = temp.join("");

  let sNumber = Number(secondNumber);
  let initialNumber = Number(firstNumber);

  console.log(typeof n);
  let result = 0;
  if (operator === "+") {
    result = add(initialNumber, sNumber);
  } else if (operator === "-") {
    result = subtract(initialNumber, sNumber);
  } else if (operator === "*") {
    result = multiply(initialNumber, sNumber);
  } else if (operator === "/") {
    result = divide(initialNumber, sNumber);
  }

  res.textContent = result;
}

function add(num1, num2) {
  return num1 + num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}

function deleteNumber() {
  res.textContent = "";
  fNumber = [];
  sNumber = [];
  operator = "";
  temp = [];
}
