"use strict";

let input = "";
let array = [];

let count = 0;

let sum = 0;
let sumString = "";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  input = line;
  array = input;
  rl.close();
}).on("close", function () {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "(") {
      count++;
    } else {
      // ')'
      if (array[i - 1] === "(") {
        count--;
        sum += count;
      } else {
        sum += 1;
        count--;
      }
    }
  }

  sumString = String(sum);
  console.log(sumString);

  process.exit();
});

//console.log("sum : " + sum);
