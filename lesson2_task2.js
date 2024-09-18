const minAge = 18;
const maxAge = 60;
const age = null;

if (typeof age !== Number) {
  console.log("Incorrect data type");
} else if (age < minAge) {
  console.log(
    "You dont have access cause your age is " + age + " Its less then " + minAge
  );
} else if (maxAge > age && age >= minAge) {
  console.log("welcome !");
} else if (age > maxAge) {
  console.log("Keep calm and look Culture channel");
} else {
  console.log("Technical work");
}
