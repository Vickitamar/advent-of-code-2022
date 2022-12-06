const { split, map, sum, pipe } = require("ramda");
const fs = require("fs");
const data = fs.readFileSync("input.txt").toString();

// X for Rock, Y for Paper, and Z for Scissors.
// 1 for Rock, 2 for Paper, and 3 for Scissors

const playMap = {
  X: 1,
  Y: 2,
  Z: 3,
};

// (0 if you lost, 3 if the round was a draw, and 6 if you won)
// opponent = A for Rock, B for Paper, and C for Scissors.
const resultsMap = {
  A: { X: 3, Y: 6, Z: 0 },
  B: { X: 0, Y: 3, Z: 6 },
  C: { X: 6, Y: 0, Z: 3 },
};

// X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win.

const finalScore = {
  A: { X: "Z", Y: "X", Z: "Y" },
  B: { X: "X", Y: "Y", Z: "Z" },
  C: { X: "Y", Y: "Z", Z: "X" },
};

const getScore = ([oppMove, myMove]) => {
  return resultsMap[oppMove][myMove] + playMap[myMove];
};

const getScorePart2 = ([opponentMove, outcome]) => {
  const moveToPlay = finalScore[opponentMove][outcome];
  return playMap[moveToPlay] + resultsMap[opponentMove][moveToPlay];
};

const partOne = pipe(split("\n"), map(split(" ")), map(getScore), sum)(data);
const partTwo = pipe(
  split("\n"),
  map(split(" ")),
  map(getScorePart2),
  sum
)(data);
console.log(partTwo);
