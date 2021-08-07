"use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.strdout,
});

let visited = [];
const MAX = 100000;

rl.on("line", (line) => {
  const [n, k] = line.split(" ").map((el) => parseInt(el));
  main(n, k);
  rl.close();
}).on("close", () => {
  process.exit();
});

const BFS = (n, k) => {
  let Queue = [];
  Queue.push(n);
  visited[n] = 0;
  let next = 0;
  while (!visited[k]) {
    let frontN = Queue[next++];
    let oneLeft = frontN - 1;
    let oneRight = frontN + 1;
    let twoN = frontN * 2;
    if (k <= n) {
      visited[k] = n - k;
      break;
    }
    if (oneLeft >= 0 && !visited[oneLeft]) {
      visited[oneLeft] = visited[frontN] + 1;
      Queue.push(oneLeft);
    }
    if (oneRight <= MAX && !visited[oneRight]) {
      visited[oneRight] = visited[frontN] + 1;
      Queue.push(oneRight);
    }
    if (twoN <= MAX && !visited[twoN]) {
      visited[twoN] = visited[frontN] + 1;
      Queue.push(twoN);
    }
  }
};

const main = (n, k) => {
  visited = new Array(k * 2).fill(0);
  BFS(n, k);
  console.log(`${visited[k]}`);
};
