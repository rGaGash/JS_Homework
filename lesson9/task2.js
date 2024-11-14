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
  const foundedCharacter = character.find((el) => el.name === name);
  if (foundedCharacter) {
    console.log(foundedCharacter);
  } else {
    console.log("character was not found");
  }
}
getCharacter("Jack");
getCharacter("Jeck");
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
  if (oldCharacter) {
    console.log(Object.assign(oldCharacter, newCharacter));
  }
}
updateCharacter("Jack", { name: "Loya", age: 32 });
updateCharacter("sdfsdfs", { name: "Loya", age: 32 });
line();

//task 5
function removeCharacter(name) {
  if (name) {
    const index = character.findIndex((el) => el.name === name);
    character.splice(index, 1);
    console.log(`Character \'${name}'\ was removed`);
  } else {
    console.log("sdfs");
  }
}
removeCharacter("Jack");
line();
console.log(character);
line();
function line() {
  console.log("=============================================================");
}
