const character = [
  { name: "Barney", age: 36 },
  { name: "Fred", age: 40 },
  { name: "Jack", age: 50 },
];

//task 1
function addCharacter(name, age) {
  if (typeof name == "string" || typeof age == "number") {
    const newObject = { name: name, age: age };
    return [...character, newObject];
  }
}
console.log(addCharacter("roshka", 33));
line();

//task 2
function getCharacter(name) {
  return character.find((el) => el.name === name);
}
console.log(getCharacter("Jack"));
line();

//task3
function getCharacterByAge(minAge) {
  return character.filter((el) => el.age >= minAge);
}
console.log(getCharacterByAge(40));
line();

//task 4
function updateCharacter(name, newCharacter) {
  const oldCharacter = getCharacter(name);
  return Object.assign(oldCharacter, newCharacter);
}
console.log(updateCharacter("Jack", { name: "Loya", age: 32 }));
line();

//task 5
function removeCharacter(name) {
  const index = character.findIndex((el) => el.name === name);
  return character.splice(index);
}
console.log(removeCharacter("Jack"));

console.log(character);
function line() {
  console.log("=============================================================");
}
