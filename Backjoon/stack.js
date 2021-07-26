"use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let finish;
let count = 0;

const stack = [];
let current = 0;
let topp = 0;
let answer = "";

rl.on("line", (line) => {
  input.push(line.split(" "));
  finish = parseInt(input[0][0]);

  if (input[count][0] === "push") {
    push(input[count][1]);
  }
  if (input[count][0] === "top") {
    top();
  }
  if (input[count][0] === "empty") {
    empty();
  }
  if (input[count][0] === "size") {
    size();
  }
  if (input[count][0] === "pop") {
    pop();
  }

  if (finish === count) {
    console.log(answer);
    rl.close();
  }

  count++;
});

function push(x) {
  stack[current] = x;
  topp = current;
  current++;
}

function top() {
  if (stack[0] === undefined) {
    answer += "-1" + "\n";
  } else {
    answer += stack[topp] + "\n";
  }
}

function empty() {
  if (stack[0] === undefined) {
    answer += "1" + "\n";
  } else {
    answer += "0" + "\n";
  }
}

function size() {
  answer += `${current}` + "\n";
}

function pop() {
  if (stack[0] === undefined) {
    answer += "-1" + "\n";
  } else {
    answer += stack[topp] + "\n";
    stack[topp] = undefined;
    if (topp == 0) {
      current = 0;
    } else {
      current--;
      topp--;
    }
  }
}
