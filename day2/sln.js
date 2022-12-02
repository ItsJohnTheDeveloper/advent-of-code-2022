const { data } = require("./data");

const didIWin = (opp, me) => {
  const moves = {
    A: "ROCK",
    B: "PAPER",
    C: "SCISSORS",
    X: "ROCK",
    Y: "PAPER",
    Z: "SCISSORS",
  };
  const score = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
  };
  let result = "WIN";
  let extraScore = 0;
  extraScore = score[me];
  if (moves[opp] === moves[me]) {
    extraScore = 3 + score[me];
    result = "TIE";
  } else if (moves[opp] === "ROCK" && moves[me] === "SCISSORS") {
    result = "LOSE";
  } else if (moves[opp] === "PAPER" && moves[me] === "ROCK") {
    result = "LOSE";
  } else if (moves[opp] === "SCISSORS" && moves[me] === "PAPER") {
    result = "LOSE";
  } else {
    extraScore = 6 + score[me];
  }
  return [result, extraScore];
};

const sln = (input) => {
  let totalScore = 0;
  for (const round in input) {
    const [result, score] = didIWin(input[round][0], input[round][2]);
    totalScore += score;
  }
  return totalScore;
};

console.log(sln(data));

/*
 **** below is part 2 solution
 */
const didIWinPart2 = (opp, me) => {
  const moves = {
    A: "ROCK",
    B: "PAPER",
    C: "SCISSORS",
  };
  const score = {
    A: 1,
    B: 2,
    C: 3,
  };
  let result = "WIN";
  let extraScore = 0;

  if (me === "X") {
    if (moves[opp] === "ROCK") {
      extraScore = 3;
    } else if (moves[opp] === "SCISSORS") {
      extraScore = 2;
    } else if (moves[opp] === "PAPER") {
      extraScore = 1;
    }
    result = "LOSE";
  } else if (me === "Y") {
    extraScore = 3 + score[opp];
    result = "TIE";
  } else if (me === "Z") {
    if (moves[opp] === "ROCK") {
      extraScore = 6 + 2;
    } else if (moves[opp] === "SCISSORS") {
      extraScore = 6 + 1;
    } else if (moves[opp] === "PAPER") {
      extraScore = 6 + 3;
    }
  }

  return [result, extraScore];
};

const slnP2 = (input) => {
  let totalScore = 0;
  for (const round in input) {
    const [result, score] = didIWinPart2(input[round][0], input[round][2]);
    totalScore += score;
  }
  return totalScore;
};

console.log(slnP2(data));
