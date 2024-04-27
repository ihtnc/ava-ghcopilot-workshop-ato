// Sample JavaScript code that filters an array of people and returns names of people 18 or older.
function getAdultNames(people) {
  let adults = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age && people[i].age >= 18) {
      adults.push(people[i].name);
    }
  }
  return adults;
}

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob" }, // Age is missing
  { name: "Charlie", age: 30 },
  // 'David' object is missing entirely
  { name: "Eve", age: 22 },
];

console.log(getAdultNames(people));
// Should log: ['Alice', 'Charlie', 'Eve']
