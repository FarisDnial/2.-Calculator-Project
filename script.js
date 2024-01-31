function numberPrompt(question) {
  return parseFloat(prompt(question));
}

function add() {
  const firstNumber = numberPrompt("Enter the first number:");
  const secondNumber = numberPrompt("Enter the second number:");
  const result = firstNumber + secondNumber;
  alert("The result is: " + result);
}

function subtract() {
  const firstNumber = numberPrompt("Enter the first number:");
  const secondNumber = numberPrompt("Enter the second number:");
  const result = firstNumber - secondNumber;
  alert("The result is: " + result);
}

function multiply() {
  const firstNumber = numberPrompt("Enter the first number:");
  const secondNumber = numberPrompt("Enter the second number:");
  const result = firstNumber * secondNumber;
  alert("The result is: " + result);
}

function divide() {
  const firstNumber = numberPrompt("Enter the first number:");
  const secondNumber = numberPrompt("Enter the second number:");
  const result = firstNumber / secondNumber;
  alert("The result is: " + result);
}

function simpleInterest() {
  const principalAmount = numberPrompt("Enter the principal amount (initial amount of money):");
  const interestRate = numberPrompt("Enter the rate of interest per period (%):");
  const time = numberPrompt("Enter the time the money is invested or borroed in years:");
  const result = (principalAmount * interestRate * time) / 100;
  alert("The result is: " + result);
}

function compoundInterest() {
  const principalAmount = numberPrompt("Enter the principal amount (initial amount of money):");
  const annualInterest = numberPrompt("Enter the annual interest rate (in decimal form).:");
  const compundingFrequency = numberPrompt("Enter the number of times interest is compounded per year:"); 
  const time = numberPrompt("Enter the time the money is invested or borrowed in years:");
  const result = principalAmount * Math.pow(1 + annualInterest / compundingFrequency, compundingFrequency * time) - principalAmount;
  alert("The result is: " + result);
}

