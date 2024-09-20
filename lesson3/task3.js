let word = "dffgdfg";
let glasnie = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
let soglasnie = [
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
];
let glasnieScore = 0;
let soglasnieScore = 0;
let changedRegistr = word.toLowerCase();

for (i = 0; i <= changedRegistr.length; i++) {
  let box = changedRegistr[i];
  if (glasnie.includes(box)) {
    glasnieScore += 1;
  }
  if (soglasnie.includes(box)) {
    soglasnieScore += 1;
  }
}
if (glasnieScore === 0 && soglasnieScore === 0) {
  console.log(`К сожалению ваш текст "${word}" не на русском языке`);
}
console.log(`glasnih - ${glasnieScore}, soglasnih - ${soglasnieScore} `);
