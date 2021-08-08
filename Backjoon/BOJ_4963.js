"use strict";

let input = [];
let visited = [];
let graph = [];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => input.push(line)).on("close", () => {
  main();
  process.exit();
});

const DFS = (x, y) => {
  const xmove = [0, 1, 1, 1, 0, -1, -1, -1];
  const ymove = [-1, -1, 0, 1, 1, 1, 0, -1];
  visited[x][y] = 1;

  for (let i = 0; i < 8; i++) {
    const nextX = x + xmove[i];
    const nextY = y + ymove[i];
    if (!visited[nextX][nextY] && graph[nextX][nextY]) {
      DFS(nextX, nextY);
    }
  }
};

const main = () => {
  let answer = "";
  while (1) {
    let [w, h] = input[0].split(" ").map((el) => parseInt(el));
    if (w === 0 && h === 0) {
      break;
    }
    input = input.slice(1);
    let count = 0;

    graph = Array.from(Array(h + 2), () => Array(w + 2).fill(0));
    visited = Array.from(Array(h + 2), () => Array(w + 2).fill(0));

    for (let i = 0; i < h; i++) {
      input[i] = input[i].split(" ").map((el) => parseInt(el));
    }

    for (let i = 0; i < h; i++) {
      for (let k = 0; k < w; k++) {
        graph[i + 1][k + 1] = input[i][k];
      }
    }

    for (let i = 1; i <= h; i++) {
      for (let k = 1; k <= w; k++) {
        if (graph[i][k] === 1 && visited[i][k] === 0) {
          DFS(i, k);
          count++;
        }
      }
    }
    input = input.slice(h);
    answer += `${count}` + "\n";
  }
  console.log(answer);
};
