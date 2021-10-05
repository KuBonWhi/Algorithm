"use strict";

let input = [];
const sList = [];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  main();
  process.exit();
});

const main = () => {
  const N = Number(input[0]);
  sList.push(3);
  while (N > sList[sList.length - 1]) {
    sList.push(2 * sList[sList.length - 1] + sList.length + 3);
  }

  let n = N;
  for (let i = sList.length - 1; i >= 0; i--) {
    const prevSLength = sList[i - 1] || 0;

    if (n === prevSLength + 1) {
      console.log("m");
      break;
    } else if (n > prevSLength + 1 && n <= prevSLength + (i + 3)) {
      console.log("o");
      break;
    } else if (n > prevSLength + (i + 3)) {
      n -= prevSLength + (i + 3);
    }
  }
};
