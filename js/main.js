//DOM Element
let decimalBtn = document.getElementById("calc-decimal");
let clearBtn = document.getElementById("calc-clear");
let backspaceBtn = document.getElementById("calc-backspace");
let displayValElement = document.getElementById("calc-display");
let calcNumBtns = document.querySelectorAll(".calc-num");
let calcOperatorBtns = document.querySelectorAll(".calc-operator");

//display value will always be zero
let displayValue = "0";
//empty temp value to keep track
let tempValue;
//all calculation will be stored in this array
let calculation = [];

function getValue(e) {
  //get the current target
  const numberValue = e.target.innerText;
  //reset display value to 0 and empty string
  if (displayValue === "0") {
    displayValue = "";
  }
  //current display value will be temp value
  displayValue += numberValue;
  //show it in DOM
  displayValElement.innerText = displayValue;
}

function calculate(e) {
  //get the symbol
  let operations = e.target.innerText;

  //check if the operator match
  switch (operations) {
    case "+":
      operations;
      checkOperator("+");
      break;
    case "-":
      operations;
      checkOperator("-");
      break;
    case "÷":
      operations;
      checkOperator("÷");
      break;
    case "*":
      operations;
      checkOperator("*");
      break;
    case "=":
      operations;
      checkOperator("=");
  }
}
//check if the operator match
function checkOperator(operator) {
  if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "÷"
  ) {
    tempValue = displayValue;
    displayValue = "0";
    displayValElement.innerText = displayValue;
    calculation.push(tempValue);
    calculation.push(operator);
  }

  if (operator === "=") {
    try {
      calculation.push(displayValue);
      let numbers = calculation.join(" ");
      let results = eval(numbers);
      displayValElement.innerText = results;
      calculation = [];
    } catch (error) {
      displayValElement.innerText = 'Syntax Error';
    }
  }
}

//remove tha last element of an array
function clearLastElement() {
  displayValue = displayValue.slice(0, displayValue.length - 1);
  if (displayValue === "") {
    displayValue = "0";
  }
  displayValElement.innerText = displayValue;
}

//reset the calculator
function clearUI() {
  displayValue = "0";
  displayValElement.innerText = displayValue;
  tempValue = undefined;
  calculation = [];
}

//loop all btn and add click listner
calcNumBtns.forEach((btn) => {
  btn.addEventListener("click", getValue, false);
});
//loop in all buttons and add click listener
calcOperatorBtns.forEach((btn) => {
  btn.addEventListener("click", calculate, false);
});

//clear display
clearBtn.addEventListener("click", clearUI);
backspaceBtn.addEventListener("click", clearLastElement);
