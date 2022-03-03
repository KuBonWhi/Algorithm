const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  main();
  process.exit();
});

//let input = ["3 4 5", "3 2", "2 2", "3 1", "2 3", "1 1"];
let input = [];
let dx = [0, 1, 0, -1];
let dy = [-1, 0, 1, 0];
let n, m, k;
let arr;
let visit;
let num = 0;
let max = 0;

const RangeCheck = (x, y) => {
  if (x >= 0 && x < n && y >= 0 && y < m) {
    return true;
  } else {
    return false;
  }
};

const DFS = (x, y) => {
  num += 1;
  visit[x][y] = 1;
  for (let i = 0; i < 4; i++) {
    let X = x + dx[i];
    let Y = y + dy[i];
    if (RangeCheck(X, Y) && visit[X][Y] === 0 && arr[X][Y] === 1) {
      DFS(X, Y);
    }
  }
};

const DFS_start = () => {
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < m; k++) {
      if (arr[i][k] === 1 && visit[i][k] === 0) {
        DFS(i, k);
        if (max < num) {
          max = num;
        }
        num = 0;
      }
    }
  }
};

const main = () => {
  [n, m, k] = input[0].split(" ").map((el) => Number(el));
  input = input.slice(1);
  arr = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0));
  visit = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0));
  for (let i = 0; i < k; i++) {
    let [x, y] = input[i].split(" ").map((el) => Number(el) - 1);
    arr[x][y] = 1;
  }
  DFS_start();
  console.log(max);
};

//main();
