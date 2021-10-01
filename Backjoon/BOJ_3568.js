"use strict";

let input = "";
let answer = "";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => (input = line)).on("close", () => {
  main();
  process.exit();
});

const main = () => {
  input = input.split(" ");
  let first = input[0];
  input = input.slice(1);
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].slice(0, input[i].length - 1);
  }
  for (let i = 0; i < input.length; i++) {
    let check = 1;
    answer += first;
    for (let k = input[i].length - 1; k >= 0; k--) {
      if (
        input[i][k] !== "*" &&
        input[i][k] !== "&" &&
        input[i][k] !== "[" &&
        input[i][k] !== "]"
      ) {
        if (
          input[i][k + 1] === "*" ||
          input[i][k + 1] === "&" ||
          input[i][k + 1] === "[" ||
          input[i][k + 1] === "]"
        ) {
          answer += " ";
        } else {
          for (let a = 0; a < input[i].length; a++) {
            if (
              input[i][a] === "*" ||
              input[i][a] === "&" ||
              input[i][a] === "[" ||
              input[i][a] === "]"
            ) {
              check = 0;
            }
          }
          if (check === 1) {
            answer += " ";
          }
        }
        answer += input[i][k];
      } else {
        if (input[i][k] === "]") {
          answer += "[";
        } else if (input[i][k] === "[") {
          answer += "]";
        } else {
          answer += input[i][k];
        }
      }
    }
    answer += ";" + "\n";
  }
  console.log(answer);
};
