"use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let graph = [];
let visited = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  main();
  process.exit();
});

const BFS = () => {
  let Queue = [];
  Queue.push(1);

  while (Queue.length) {
    let deQueue = Queue.shift();
    visited[deQueue] = 1;
    for (let i = 0; i < graph.length; i++) {
      if (graph[deQueue][i] === 1 && visited[i] === 0) {
        visited[i] = 1;
        Queue.push(i);
      }
    }
  }
};

const main = () => {
  const n = parseInt(input[0]);
  const m = parseInt(input[1]);
  let count = 0;
  input = input.slice(2);

  graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  visited = Array(n + 1).fill(0);

  for (let i = 0; i < input.length; i++) {
    let [x, y] = input[i].split(" ").map((el) => parseInt(el));
    graph[x][y] = 1;
    graph[y][x] = 1;
  }
  BFS();
  for (let i of visited) {
    if (i === 1) {
      count++;
    }
  }
  console.log(`${count - 1}`);
};
