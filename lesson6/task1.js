//requirement 1
const array = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];
array.forEach((el) => {
  if (el % 3 === 0) {
    console.log(el);
  }
});
divisionOfTasks();
//requirement 2
console.log(array.map((el) => el - array.length));
divisionOfTasks();

//requirement 3
console.log(
  array.filter((el, index, arr) => {
    return index > 0 && el > arr[index - 1];
  })
);
divisionOfTasks();

//requirement 4
console.log(array.find((el, index) => el === index));
divisionOfTasks();

//requirement 5
console.log(array.sort((a, b) => a - b));
divisionOfTasks();

//requirement 6
console.log(array.reduce((sum, el) => sum + el));
divisionOfTasks();

//requirement 7
console.log(array.some((el) => el > 90));
divisionOfTasks();

//requirement 8
console.log(array.every((el) => el > 9 && el < 100));
divisionOfTasks();

function divisionOfTasks() {
  console.log("=====================================");
}
