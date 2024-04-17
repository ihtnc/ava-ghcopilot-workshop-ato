// Generate a function that will accept two numbers and an arithmetic operator. The function will perform the operation between the numbers and return the result.

function arithmetic(num1, num2, operator) {
  try {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Invalid numbers");
    }
    return eval(num1 + operator + num2);
  } catch (error) {
    return "Invalid operator or numbers";
  }
}

// Test the function by accepting user input for the numbers and the operator using Node Readline.

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the first number: ", (num1) => {
  readline.question("Enter the second number: ", (num2) => {
    readline.question("Enter the operator: ", (operator) => {
      console.log(arithmetic(num1, num2, operator));
      readline.close();
    });
  });
});
