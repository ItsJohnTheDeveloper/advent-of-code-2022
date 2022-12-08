import fs from "fs";

const data = fs.readFileSync("data.txt", "utf-8").split("\n\n");

const stacks = data[0].split("\n");
stacks.pop();

const rows = stacks.map((str) => str.replace(/[\[\]/]/g, " ")).reverse();

const orderedCols = [];
rows.forEach((row) => {
  for (const i in row) {
    if (!orderedCols[i]) {
      orderedCols[i] = [row[i]];
      continue;
    }
    if (row[i] !== " ") {
      orderedCols[i].push(row[i]);
    }
  }
});

const cleanStacks = orderedCols.filter((row) => row[0] !== " ");

const instructions = data[1].split("\n").map((str) =>
  str
    .replaceAll(/move|from|to| /g, " ")
    .replaceAll("   ", " ")
    .trim()
    .split(" ")
);

for (const i in instructions) {
  const move = Number(instructions[i][0]);
  const from = Number(instructions[i][1] - 1);
  const to = Number(instructions[i][2] - 1);

  const movedVals = cleanStacks[from].splice(
    cleanStacks[from].length - move,
    move
  );
  cleanStacks[to].push(...movedVals.reverse()); // Part 2 just remove .reverse() here
}

const answer = cleanStacks.map((row) => row[row.length - 1]);
console.log({ answer });
