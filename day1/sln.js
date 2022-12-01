const { jsonData } = require("./data");

const sln = (input) => {
  const elfsCalories = {};
  let numOfElfs = 1;

  for (const i in input) {
    if (input[i]) {
      elfsCalories[numOfElfs] =
        Number(Object.values(elfsCalories)[numOfElfs - 1] || 0) +
        Number(input[i]);
    } else {
      numOfElfs++;
    }
  }

  const elf = Object.entries(elfsCalories).reduce((a, e) =>
    a[1] > e[1] ? a : e
  );
  return `Elf ${elf[0]} has a total of ${elf[1]} calories`;
};

console.log(sln(jsonData));
