/**
 * Calculates the sum of two numbers.
 * @param {number} num1 The first number to be added.
 * @param {number} num2 The second number to be added.
 * @returns {number} The sum of num1 and num2.
 */
function calculateSum(num1, num2) {
  // Verify that the arguments are numbers
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new TypeError("The arguments must be numbers.");
  }

  // Return the sum of num1 and num2
  return num1 + num2;
}

/**
 * Checks if a user is eligible for access based on their age.
 * @param {number} age The age of the user.
 * @param {number} [minimumAge=18] The minimum age required for access (defaults to 18).
 * @returns {boolean} True if the user meets the age requirement, false otherwise.
 */
function isUserEligibleForAccess(age, minimumAge = 18) {
  // Verify that the age is a positive number
  if (typeof age !== "number" || age < 0) {
    throw new TypeError("Age must be a positive number.");
  }

  // Compare the user's age with the minimum age
  return age >= minimumAge;
}
