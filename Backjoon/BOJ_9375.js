"use strict";

let input = [];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => input.push(line)).on("close", () => {
  main();
  process.exit();
});

let array = [];
let Map = {};
let count = 0;
let answer = "";
const main = () => {
  const n = parseInt(input[0]);
  input = input.slice(1);
  let j = 0;
  for (let i = 0; i < n; i++) {
    let limit = parseInt(input[j]);
    j++;
    while (count < limit) {
      array[count] = input[j].split(" ");
      if (isNaN(Map[`${array[count][1]}`])) {
        Map[`${array[count][1]}`] = 1;
      } else {
        Map[`${array[count][1]}`]++;
      }
      count++;
      j++;
    }
    count = 0;
    let start = 1;
    for (let k = 0; k < Object.values(Map).length; k++) {
      start *= Object.values(Map)[k] + 1;
    }
    start--;
    Map = {};
    array = [];
    if (i < n - 1) {
      answer += start + "\n";
    } else {
      answer += start;
    }
  }
  console.log(answer);
};
