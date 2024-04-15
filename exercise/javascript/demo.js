// Generate a function that will accept a string and return the string in reverse

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // olleh
console.log(reverseString("world")); // dlrow
