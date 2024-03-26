// Generate a function that will accept two numbers and an arithmetic operator. The function will perform the operation between the numbers and return the result.

/**
 * Performs an arithmetic operation on two numbers.
 *  
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @param {string} operator The arithmetic operator ('+', '-', '*', '/').
 * @returns {number} The result of the operation.
 * @throws {TypeError} If the arguments are not numbers or the operator is invalid.
 * @throws {Error} If the division by zero is attempted.
 * @example
 * // Returns 5
 * calculateOperation(3, 2, '+');
 * @example
 * // Returns -1
 * calculateOperation(3, 4, '-');
 * 
 
function calculateOperation(num1, num2, operator) {
    // Verify that the arguments are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError('The arguments must be numbers.');
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
            // Check for division by zero
            if (num2 === 0) {
                throw new Error('Division by zero is not allowed.');
            }
            return num1 / num2;
        default:
            throw new TypeError('Invalid operator.');
    }
}


