const { data } = require("./data.js");

const sln = (input) => {
  const map = {};
  for (const i in input) {
    let fullyContains = false;
    const [a, b] = input[i].split(",");
    const [aStart, aEnd] = a.toString().split("-");
    const [bStart, bEnd] = b.toString().split("-");
    const aDuplicate = Number(aStart) === Number(aEnd);
    const bDuplicate = Number(aStart) === Number(aEnd);

    if (Number(bEnd) <= Number(aEnd) && Number(bStart) >= Number(aStart)) {
      fullyContains = true;
    } else if (
      Number(aEnd) <= Number(bEnd) &&
      Number(aStart) >= Number(bStart)
    ) {
      fullyContains = true;
    } else if (
      aDuplicate &&
      Number(aStart) >= Number(bStart) &&
      Number(aStart) <= Number(bEnd)
    ) {
      fullyContains = true;
    } else if (
      bDuplicate &&
      Number(bStart) >= Number(aStart) &&
      Number(bStart) <= Number(aEnd)
    ) {
      fullyContains = true;
    }
    map[`set${i}`] = fullyContains;
  }
  const count = Object.values(map).filter(Boolean).length;
  return count;
};

const sln2 = (input) => {
  const map = {};
  for (const i in input) {
    let overlap = true;
    const [a, b] = input[i].split(",");
    const [aStart, aEnd] = a.toString().split("-");
    const [bStart, bEnd] = b.toString().split("-");

    if (Number(aEnd) < Number(bStart)) {
      overlap = false;
    } else if (Number(bEnd) < Number(bStart)) {
      overlap = false;
    } else if (Number(aStart) > Number(bEnd)) {
      overlap = false;
    } else if (Number(bStart) > Number(aEnd)) {
      overlap = false;
    }
    map[`set${i}`] = overlap;
  }

  const count = Object.values(map).filter(Boolean).length;
  return count;
};

console.log(sln(data));
console.log(sln2(data));
