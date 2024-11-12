//task 1
const character = { name: "Barney", age: 36, gender: "male", isQa: true };
const wordsWithFourSimbols = [
  Object.keys(character).filter((el) => el.length == 4),
];
console.log(wordsWithFourSimbols);
line();

//task 2
const wordsWithBarneyAndMale = [
  Object.values(character).filter((el) => el === "Barney" || el === "male"),
];
console.log(wordsWithBarneyAndMale);
line();

//task3
const keys = Object.entries(character);
for (let el of keys) {
  console.log(`key = ${el[0]}, value = ${el[1]}`);
}
line();

//task3
console.log("salary" in character);
console.log(character.hasOwnProperty("salary"));

function line() {
  console.log("=============================================================");
}
