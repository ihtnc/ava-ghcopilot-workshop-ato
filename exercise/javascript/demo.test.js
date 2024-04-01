const assert = require('assert');

// Test case 1: Addition
assert.strictEqual(arithmetic(2, 3, '+'), 5);

// Test case 2: Subtraction
assert.strictEqual(arithmetic(5, 2, '-'), 3);

// Test case 3: Multiplication
assert.strictEqual(arithmetic(4, 6, '*'), 24);

// Test case 4: Division
assert.strictEqual(arithmetic(10, 2, '/'), 5);

// Test case 5: Invalid operator
assert.strictEqual(arithmetic(2, 3, '%'), 'Invalid operator');