let maxScore = 100;
let minScore = 1;
for (i = minScore; i <= maxScore; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`😊Число ${i} делится без остатка на 3 и на 5😊`);
  }
  if (i % 3 == 0) {
    console.log(`Число ${i} делится без остатка на 3`);
  }
  if (i % 5 == 0) {
    console.log(`Число ${i} делится без остатка на 5`);
  }
}
