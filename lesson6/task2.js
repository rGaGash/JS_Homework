const words = [
  "umbrella",
  "apple",
  "ocean",
  "independent",
  "education",
  "elephant",
  "island",
  "universe",
  "environment",
  "queue",
];
const vowels = "aeiou";

function vowelsCounting(word) {
  const vowels = "aeiou";
  return [...word].filter((el) => vowels.includes(el)).length;
}

function sortByVowels(array) {
  return [...array].sort(
    (el1, el2) => vowelsCounting(el1) - vowelsCounting(el2)
  );
}

console.log(sortByVowels(words));
