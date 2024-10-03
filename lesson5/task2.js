// //1

// function palidromCheck(someWord) {
//   let wordContainer = "";
//   for (const txt of someWord) {
//     wordContainer += txt.toLowerCase();
//   }
//   let reverseWord = wordContainer.split("").reverse().join("");
//   return wordContainer === reverseWord ? "palidrom" : "nepalidrom";
// }

// let result = palidromCheck("КаБак");
// console.log(result);

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
    console.log(longestElement);
  } else {
    console.log(maxLength);
  }
}

sentenceVersus("some text tetr");
