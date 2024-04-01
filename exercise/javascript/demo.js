// Generate a function that will accept two numbers and an arithmetic operator. The function will perform the operation between the numbers and return the result.

/**
 * Performs an arithmetic operation on two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @param {string} operator The arithmetic operator ('+', '-', '*', '/').
 * @returns {number} The result of the operation.
 * @throws {TypeError} If the arguments are not numbers or the operator is invalid.
 * 
 * @example
 * // Returns 5
 * calculateOperation(3, 2, '+');
 * 

function calculateOperation(num1, num2, operator) {
    // Verify that the arguments are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError('The first two arguments must be numbers.');
    }
    
    // Verify that the operator is a string
    if (typeof operator !== 'string') {
        throw new TypeError('The operator must be a string.');
    }
    
    // Perform the operation based on the operator
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            throw new TypeError('Invalid operator. Use "+", "-", "*", or "/".');
    }
}
 */
