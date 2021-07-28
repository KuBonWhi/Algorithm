"use strict";

const { mainModule } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let count = 0;
let finish = 0;
const q = [];
let answer = "";
rl.on("line", (line) => {
  input.push(line.split(" "));
  finish = parseInt(input[0][0]);
  if (count === finish) {
    main(input);
    rl.close();
  }
  count++;
}).on("close", () => {
  process.exit();
});

const main = (inputArray) => {
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i][0] === "push") {
      push(inputArray[i][1]);
    }
    if (inputArray[i][0] === "pop") {
      pop();
    }
    if (inputArray[i][0] === "empty") {
      empty();
    }
    if (inputArray[i][0] === "size") {
      size();
    }
    if (inputArray[i][0] === "front") {
      front();
    }
    if (inputArray[i][0] === "back") {
      back();
    }
  }
  console.log(answer);
};

const push = (x) => {
  q.push(x);
};

const pop = () => {
  if (q.length === 0) {
    answer += `-1` + "\n";
  } else {
    answer += `${q.splice(0, 1)}` + "\n";
  }
};

const size = () => {
  answer += `${q.length}` + "\n";
};

const empty = () => {
  if (q.length === 0) {
    answer += `1` + "\n";
  } else {
    answer += `0` + "\n";
  }
};

const front = () => {
  if (q.length === 0) {
    answer += `-1` + "\n";
  } else {
    answer += `${q[0]}` + "\n";
  }
};

const back = () => {
  if (q.length === 0) {
    answer += `-1` + "\n";
  } else {
    answer += `${q[q.length - 1]}` + "\n";
  }
};
