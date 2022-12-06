const {
  splitWhenever,
  equals,
  pipe,
  map,
  sum,
  sort,
  descend,
  identity,
  slice,
} = require("ramda");
const fs = require("fs");
const data = fs.readFileSync("input.txt").toString().split("\n");

const partOne = pipe(
  splitWhenever(equals("")),
  map(sum),
  sort(descend(identity))
)(data);

const partTwo = pipe(slice(0, 3), sum)(partOne);

console.log(partTwo);
