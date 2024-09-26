const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
let copie = [];
for (i = 0; i < values.length; i++) {
  if (!copie.includes(values[i])) {
    copie.push(values[i]);
  }
}
console.log(copie);
