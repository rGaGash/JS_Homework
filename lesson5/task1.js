// // //1_____
// function infinityArrays(...arr) {
//   let newArray = [];
//   for (const array of arr) {
//     newArray = newArray.concat(array);
//   }
//   return newArray;
// }

// const result = infinityArrays(
//   [1, 2, 3, 4],
//   [4, 5, 6, 7, 8],
//   [4, 5, 6, 7, 7, 7, 7],
//   [0]
// );
// console.log(result);

// ///2__________

// const text = "I am super engineer";

// function transformeSentence(sentence) {
//   let sentenceContainer = sentence.split(" ");
//   let result = "";
//   for (let i = 0; i < sentenceContainer.length; i++) {
//     if (i === 0) {
//       result += sentenceContainer[i].toLowerCase();
//     } else {
//       result +=
//         "_" +
//         sentenceContainer[i][0].toUpperCase() +
//         sentenceContainer[i].slice(1).toLowerCase();
//     }
//   }
//   console.log(result);
// }

// transformeSentence(text);

//3
function fibonacci(n) {
  if (n === 1 || n == 2) {
    return 1;
  }
  if (n < 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(0));
