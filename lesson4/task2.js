const pizzaNames = [
  "Carbonara",
  "Crudo",
  "Napoletana",
  "Pugliese",
  "Montanara",
  "Emiliana",
  "Romana",
];

const competitorsPizza = [
  "Carbonara",
  "Crudo",
  "Napoletana",
  "Pugliese",
  "Romana",
  "Govniani",
  "Beznachinkiniani",
];

const toLowerCaseCompititorsPizza = competitorsPizza.map((pizza) =>
  pizza.toLowerCase()
);
const toLowerCaseMyPizza = pizzaNames.map((pizza) => pizza.toLowerCase());

const elementsEqual = toLowerCaseCompititorsPizza.every((elements) =>
  toLowerCaseMyPizza.includes(elements)
);

let list = [];
if (elementsEqual) {
  console.log("null");
} else {
  for (i = 0; i < toLowerCaseMyPizza.length; i++) {
    if (!toLowerCaseCompititorsPizza.includes(toLowerCaseMyPizza[i])) {
      list.push(toLowerCaseMyPizza[i]);
    }
  }
}
console.log(`Compititor havent this pizza - \"${list}\"`);
