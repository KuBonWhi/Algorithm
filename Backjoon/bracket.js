"use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let finish;
let count = 0;

let answer = "";

rl.on("line", (line) => {
  input.push(line);
  finish = parseInt(input[0]);
  if (finish === count) {
    for (let i = 1; i < input.length; i++) {
      let bool = check(input[i]);
      if (bool === false) {
        answer += "NO" + "\n";
      } else {
        answer += "YES" + "\n";
      }
    }
    console.log(answer);
    rl.close();
  }
  count++;
});

function check(str) {
  let LR = 0;
  for (let i = 0; i < str.length; i++) {
    if (LR < 0) {
      return false;
    } else {
      if (str[i] === "(") {
        LR++;
      } else {
        LR--;
      }
    }
  }
  if (LR > 0) {
    return false;
  } else if (LR < 0) {
    return false;
  } else {
    return true;
  }
}
