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

let list = [];

for (let i = 0; i < toLowerCaseMyPizza.length; i++) {
  if (!toLowerCaseCompititorsPizza.includes(toLowerCaseMyPizza[i])) {
    list.push(toLowerCaseMyPizza[i]);
  } else {
    console.log("null");
  }
}
console.log(list);
