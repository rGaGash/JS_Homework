//1

function palidromCheck(someWord) {
  let wordContainer = "";
  for (const txt of someWord) {
    wordContainer += txt.toLowerCase();
  }
  let reverseWord = wordContainer.split("").reverse().join("");
  return wordContainer === reverseWord;
}

let result = palidromCheck("КаБак");
console.log(result);

//2
function sentenceVersus(someText) {
  const textContainer = someText.split(" ");
  const maxLength = textContainer.reduce((a, b) =>
    a.length > b.length ? a : b
  );
  const longestElement = textContainer.filter(
    (el) => el.length === maxLength.length
  );
  if (longestElement.length >= 2) {
    return longestElement;
  } else {
    return maxLength;
  }
}
const result1 = console.log(sentenceVersus("some text tetr"));
