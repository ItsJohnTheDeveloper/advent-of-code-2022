import fs from "fs";

const data = fs.readFileSync("data.txt", "utf-8");

function hasDuplicate(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

let index = 0;
for (let i = 0; i <= data.length; i++) {
  let set = data.slice(i, i + 4); // change to 14 for part 2

  const setArr = set.split("");

  const hasDup = hasDuplicate(setArr);
  if (!hasDup) {
    index = setArr.length + i;
    break;
  }
}

console.log({ index });
