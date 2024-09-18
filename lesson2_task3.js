const minAge = 18;
const maxAge = 60;
const age = 5; //вод возраста сюда
const correctAge = isNaN(age) ? null : Number(age);
console.log(correctAge);
if (correctAge === null) {
  console.log("Incorrect data type");
} else if (correctAge < minAge) {
  console.log(
    "You dont have access cause your age is " + age + " Its less then " + minAge
  );
} else if (maxAge > correctAge && correctAge >= minAge) {
  console.log("welcome !");
} else if (correctAge > maxAge) {
  console.log("Keep calm and look Culture channel");
} else {
  console.log("Technical work");
}
