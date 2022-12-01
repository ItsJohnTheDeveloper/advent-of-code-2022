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

  // part 2 - return the sum of the top 3 elfs
  const top3Sum = Object.values(elfsCalories)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b);

  const elf = Object.entries(elfsCalories).reduce((a, e) =>
    a[1] > e[1] ? a : e
  );

  return `Elf ${elf[0]} has a total of ${elf[1]} calories. P2: sum of top 3 elves is ${top3Sum}`;
};

console.log(sln(jsonData));
