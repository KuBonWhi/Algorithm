"use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let array = [];
let move = [];
let n, m, x, y, k;
let answer = [];
let output = "";
let jusa = [0, 0, 0, 0, 0, 0];

rl.on("line", (line) => {
  input.push(line);
}).once("close", () => {
  main();
  process.exit();
});

// 4 아래
// 3 위
// 2 왼쪽
// 1 오른쪽

const rule = () => {
  if (array[x][y] === 0) {
    array[x][y] = jusa[5];
  } else {
    jusa[5] = array[x][y];
    array[x][y] = 0;
  }
};

const movedjusa = (moveNum) => {
  if (moveNum === 4) {
    if (x + 1 < n) {
      [jusa[0], jusa[1], jusa[2], jusa[3], jusa[4], jusa[5]] = [
        jusa[1],
        jusa[5],
        jusa[2],
        jusa[3],
        jusa[0],
        jusa[4],
      ];
      x = x + 1;
      rule();
      answer.push(jusa[0]);
    }
  } else if (moveNum === 3) {
    if (x - 1 >= 0) {
      [jusa[0], jusa[1], jusa[2], jusa[3], jusa[4], jusa[5]] = [
        jusa[4],
        jusa[0],
        jusa[2],
        jusa[3],
        jusa[5],
        jusa[1],
      ];
      x = x - 1;
      rule();
      answer.push(jusa[0]);
    }
  } else if (moveNum === 2) {
    if (y - 1 >= 0) {
      [jusa[0], jusa[1], jusa[2], jusa[3], jusa[4], jusa[5]] = [
        jusa[2],
        jusa[1],
        jusa[5],
        jusa[0],
        jusa[4],
        jusa[3],
      ];
      y = y - 1;
      rule();
      answer.push(jusa[0]);
    }
  } else if (moveNum === 1) {
    if (y + 1 < m) {
      [jusa[0], jusa[1], jusa[2], jusa[3], jusa[4], jusa[5]] = [
        jusa[3],
        jusa[1],
        jusa[0],
        jusa[5],
        jusa[4],
        jusa[2],
      ];
      y = y + 1;
      rule();
      answer.push(jusa[0]);
    }
  }
};

function main() {
  [n, m, x, y, k] = input[0].split(" ").map((el) => Number(el));
  input = input.slice(1);

  for (let i = 0; i < n; i++) {
    let p = [];
    input[i].split(" ").map((el) => {
      p.push(Number(el));
    });
    array.push(p);
  }
  input = input.slice(n);
  input[0].split(" ").map((el) => move.push(Number(el)));
  move.forEach((el) => {
    movedjusa(el);
  });
  for (let i = 0; i < answer.length; i++) {
    if (i === answer.length - 1) {
      output += `${answer[i]}`;
    } else {
      output += `${answer[i]}` + "\n";
    }
  }
  console.log(output);
}
