//Задание1
for (i = 10; i >= 0; i--) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

//Задание2
for (i = 1; i <= 5; i++) {
  console.log(":)".repeat(i));
}

//Задание3
let text = "Hello! I am a JS student!";
console.log(text.replaceAll(" ", "1"));
