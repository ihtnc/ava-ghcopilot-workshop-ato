// Generate a function that will accept two numbers and an arithmetic operator. The function will perform the operation between the numbers and return the result.

/**
 * Performs an arithmetic operation on two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @param {string} operator The arithmetic operator to apply.
 * @returns {number} The result of the operation.
 * @throws {TypeError} If the arguments are not numbers or the operator is invalid.
 * @throws {Error} If the operation results in an error (e.g., division by zero).
 * @example
 * // Returns 5
 * calculateOperation(2, 3, "+");
 */

function calculateOperation(num1, num2, operator) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Error: The arguments must be numbers.";
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return 'Error: Division by zero is not allowed.';
      }
      return num1 / num2;
    default:
      return 'Error: Invalid operator specified.'
  }
}

// Call the function with different test cases
console.log(calculateOperation(2, 3, "+")); // 5
console.log(calculateOperation(5, 2, "-")); // 3
console.log(calculateOperation(4, 2, "*")); // 8
console.log(calculateOperation(10, 2, "/")); // 5
console.log(calculateOperation(8, 0, "/")); // Error: Division by zero is not allowed.
console.log(calculateOperation(3, 4, "%")); // Error: Invalid operator specified.
console.log(calculateOperation("2", 3, "+")); // Error: The arguments must be numbers.
console.log(calculateOperation(2, "3", "+")); // Error: The arguments must be numbers.
console.log(calculateOperation(2, -3, "+")); // 5
console.log(calculateOperation(-2, 3, "+")); // 1
