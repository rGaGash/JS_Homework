const word = "ЗдесьЯКОБЫ текст ДЛЯ проверки__9";
const glasnie = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
const soglasnie = [
  "б",
  "в",
  "г",
  "д",
  "ж",
  "з",
  "й",
  "к",
  "л",
  "м",
  "н",
  "п",
  "р",
  "с",
  "т",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ь",
  "ъ",
];
let glasnieScore = 0;
let soglasnieScore = 0;
let toLowerCasedStr = word.toLowerCase();

for (i = 0; i <= toLowerCasedStr.length; i++) {
  let char = toLowerCasedStr[i];
  if (glasnie.includes(char)) {
    glasnieScore += 1;
  }
  if (soglasnie.includes(char)) {
    soglasnieScore += 1;
  }
}
if (glasnieScore === 0 && soglasnieScore === 0) {
  console.log(`К сожалению ваш текст "${word}" не на русском языке`);
}
console.log(`glasnih - ${glasnieScore}, soglasnih - ${soglasnieScore} `);
