"use strict";

const { format } = require("path");
const { stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let BFS_graph = [];
let DFS_graph = [];
let visited = [];
let visited2 = [];
let graph = [];
let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  main();
  process.exit();
});

function DFS(v) {
  visited[v] = true;
  DFS_graph.push(v);
  for (let i = 0; i < graph.length; i++) {
    if (graph[v][i] === 1 && visited[i] === false) {
      DFS(i);
    }
  }
}

function BFS(v) {
  let Queue = [];
  Queue.push(v);
  BFS_graph.push(v);
  while (Queue.length !== 0) {
    let deQueue = Queue.shift();
    visited2[deQueue] = true;
    for (let i = 0; i < graph.length; i++) {
      if (graph[deQueue][i] === 1 && visited2[i] === false) {
        visited2[i] = true;
        Queue.push(i);
        BFS_graph.push(i);
      }
    }
  }
}

const main = () => {
  let [n, m, v] = input[0].split(" ").map((el) => parseInt(el));
  input = input.slice(1);
  graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let i of input) {
    let [x, y] = i.split(" ").map((el) => parseInt(el));
    graph[x][y] = 1;
    graph[y][x] = 1;
  }

  visited2 = new Array(n + 1).fill(false);
  visited = new Array(n + 1).fill(false);
  BFS(v);
  DFS(v);
  console.log(DFS_graph.join(" "));
  console.log(BFS_graph.join(" "));
};
