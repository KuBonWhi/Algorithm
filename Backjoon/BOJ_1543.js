"use strict";

let input = [];
let inputvisit = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => input.push(line)).on("close", () => {
  main();
  process.exit();
});

const main = () => {
  const find = input[1];
  input = input[0];
  inputvisit = Array(input.length).fill(0);
  let count = 0;
  let check = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === find[0]) {
      if (inputvisit[i] === 0) {
        for (let j = 0; j < find.length; j++) {
          if (input[i + j] !== find[j]) {
            check = 1;
          }
        }
        if (check === 0) {
          count++;
          for (let j = 0; j < find.length; j++) {
            inputvisit[i + j] = 1;
          }
        } else {
          check = 0;
        }
      }
    }
  }
  console.log(`${count}`);
};
