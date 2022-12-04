const { data } = require("./data");

const sln = (data) => {
  const alphabet = "*abcdefghijklmnopqrstuvwxyz"; // * is to account for index zero
  let sum = 0;

  for (const row in data) {
    const comp1Map = {};
    const commonsMap = {};
    const comp1 = data[row].slice(0, data[row].length / 2);
    const comp2 = data[row].slice(data[row].length / 2, data[row].length);

    Array.from(comp1).forEach((letter) => {
      comp1Map[letter] = letter;
    });
    Array.from(comp2).forEach((letter) => {
      if (comp1Map[letter]) {
        commonsMap[letter] = letter;
      }
    });
    Array.from(Object.keys(commonsMap)).forEach((commonLetter) => {
      const upperCase = commonLetter.toUpperCase() === commonLetter;
      sum += upperCase
        ? alphabet.indexOf(commonLetter.toLowerCase()) + 26
        : alphabet.indexOf(commonLetter);
    });
  }

  return sum;
};

const sln2 = (data) => {
  const alphabet = "*abcdefghijklmnopqrstuvwxyz"; // * is to account for index zero
  let sum = 0;

  for (let i = 0; i < data.length; i += 3) {
    const row1 = {};
    const row2 = {};
    const commonsMap = {};
    Array.from(data[i]).forEach((letter) => (row1[letter] = letter));
    Array.from(data[i + 1]).forEach((letter) => (row2[letter] = letter));

    Array.from(data[i + 2]).forEach((letter) => {
      if (row1[letter] && row2[letter]) {
        commonsMap[letter] = letter;
      }
    });
    Array.from(Object.keys(commonsMap)).forEach((commonLetter) => {
      const upperCase = commonLetter.toUpperCase() === commonLetter;
      sum += upperCase
        ? alphabet.indexOf(commonLetter.toLowerCase()) + 26
        : alphabet.indexOf(commonLetter);
    });
  }

  return sum;
};

console.log("sln 1: ", sln(data));
console.log("sln 2: ", sln2(data));
