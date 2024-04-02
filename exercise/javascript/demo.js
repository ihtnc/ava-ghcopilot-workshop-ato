// Generate a function that will accept two numbers and an arithmetic operator. The function will perform the operation between the numbers and return the result.

/**
 * Performs an arithmetic operation on two numbers.
 * @param {number} num1 The first number to be used in the operation.
 * @param {number} num2 The second number to be used in the operation.
 * @param {string} operator The arithmetic operator to be applied.
 * @returns {number} The result of the arithmetic operation.
 * @throws {TypeError} If num1 or num2 are not numbers.
 * @throws {Error} If the operator is not a valid arithmetic operator.
 *
 * @example
 * // Returns 10
 * calculateOperation(5, 5, '+');
 *
 * @example
 * // Returns 15
 * calculateOperation(20, 5, '-');
 */

function calculateOperation(num1, num2, operator) {
  // Verify that the arguments are numbers
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new TypeError("The arguments must be numbers.");
  }
  // Perform the operation based on the operator
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
      throw new Error("Invalid operator.");
  }
}

//// Test the function by accepting user input for the numbers and the operator using Node Readline.
// Import the readline module
const readline = require("readline");

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for the first number

rl.question("Enter the first number: ", (num1) => {
  // Prompt the user for the second number
  rl.question("Enter the second number: ", (num2) => {
    // Prompt the user for the arithmetic operator
    rl.question("Enter the arithmetic operator (+, -, *, /): ", (operator) => {
      try {
        // Convert the input strings to numbers
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        // Calculate the result of the operation
        const result = calculateOperation(num1, num2, operator);
        // Display the result
        console.log(`The result is: ${result}`);
      } catch (error) {
        // Display any errors that occur
        console.error(error.message);
      } finally {
        // Close the interface
        rl.close();
      }
    });
  });
});
