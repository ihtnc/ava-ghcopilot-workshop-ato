// Generate a function that will accept two numbers and an arithmetic operator. The function will perform the operation between the numbers and return the result.
function performCalculation(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

// Let's test the function
console.log(performCalculation(5, 10, "+")); // 15
