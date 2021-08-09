"use strict";

let countOne = 0;
let countZero = 0;
let first = [1, 0];
let input = [];
let answer = "";
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => input.push(line)).on("close", () => {
  main();
  process.exit();
});

const fibo = (n) => {
  let next = [];
  if (n === 0) {
    answer += "1 0" + "\n";
  } else {
    next.push(first[0]);
    next.push(first[1]);
    for (let i = 0; i < n; i++) {
      let x = next[0];
      let y = next[1];
      next[0] = y;
      next[1] = x + next[0];
    }
    answer += next[0] + " " + next[1] + "\n";
  }
};

const main = () => {
  for (let i = 1; i < input.length; i++) {
    fibo(parseInt(input[i]));
  }

  console.log(answer);
};
