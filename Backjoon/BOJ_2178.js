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

function BFS(x, y, n, m) {
  const xmove = [0, 0, -1, 1];
  const ymove = [-1, 1, 0, 0];
  let Queue = [];
  Queue.push([x, y]);
  visited[x][y] = 1;

  while (Queue.length) {
    const [x, y] = Queue.shift();
    for (let i = 0; i < 4; i++) {
      const nextX = x + xmove[i];
      const nextY = y + ymove[i];
      if (!visited[nextX][nextY] && graph[nextX][nextY]) {
        visited[nextX][nextY] = visited[x][y] + 1;
        Queue.push([nextX, nextY]);
      }
    }
  }
}

const main = () => {
  let [n, m] = input[0].split(" ").map((el) => parseInt(el));
  input = input.slice(1);
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split("").map((el) => parseInt(el));
  }
  graph = Array.from(Array(input.length + 2), () =>
    Array(input[0].length + 2).fill(0)
  );

  for (let i = 0; i < input.length; i++) {
    for (let c = 0; c < input[0].length; c++) {
      graph[i + 1][c + 1] = input[i][c];
    }
  }
  visited = Array.from(Array(input.length + 2), () =>
    Array(input[0].length + 2).fill(0)
  );
  BFS(1, 1, n, m);
  console.log(`${visited[n][m]}`);
};
