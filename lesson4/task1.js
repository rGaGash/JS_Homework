const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < values.length; i++) {
  if (values[i] % 2 === 0) {
    console.log(
      `Элемент ${values[i]} - четный, вот его квадрат - ${values[i] ** 2}`
    );
  } else {
    console.log(
      `Элемент ${values[i]} - нечетный, вот его куб - ${values[i] ** 3}`
    );
  }
}

const task = [1, 2, 3, 4, 5];
task.push(6);
task.unshift(0);
task.splice(2, 1);
task.pop();
console.log(task);

const task1 = [4, 6, 8, 1, 2];
const [first, second, ...rest] = task1;
console.log(first);
console.log(second);
console.log(rest);

const task2 = [1, 2, 3, 4, 5];
const task3 = [6, 7, 8, 9, 10];
const mergedArray = [...task2, ...task3];
console.log(`Answer for \"tas4\" ${mergedArray}`);
