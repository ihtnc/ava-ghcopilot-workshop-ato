// Generate a function that will accept two numbers and an arithmetic operator. The function will perform the operation between the numbers and return the result.

/**
 * Performs a mathematical operation on two numbers.
 *
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {string} operator - The operator to perform the operation.
 * @returns {number} The result of the operation.
 */
function performOperation(num1, num2, operator) {
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
      throw new Error("Invalid operator");
  }
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Calculates the nth Fibonacci number using memoization.
 * What is memoization? It is an optimization technique used to store the results of expensive function calls and return the cached result when the same inputs occur again.
 * @param {number} n - The index of the Fibonacci number to calculate.
 * @param {Object} memo - An optional object used for memoization.
 * @returns {number} The nth Fibonacci number.
 */
function memoizedFibonacci(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }

  if (n <= 1) {
    return n;
  }

  memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);
  return memo[n];
}

// Export all the functions for testing
module.exports = {
  performOperation,
  reverseString,
  memoizedFibonacci,
};
