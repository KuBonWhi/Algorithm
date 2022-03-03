const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//let input = ["1", "5 3 6", "0 2", "1 2", "2 2", "3 2", "4 2", "4 0"];
/*
let input = [
  "2",
  "10 8 17",
  "0 0",
  "1 0",
  "1 1",
  "4 2",
  "4 3",
  "4 5",
  "2 4",
  "3 4",
  "7 4",
  "8 4",
  "9 4",
  "7 5",
  "8 5",
  "9 5",
  "7 6",
  "8 6",
  "9 6",
  "10 10 1",
  "5 5",
];
*/
let input = [];
let testCase = 0;
let arr;
let visit;
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, -1];
let all = 0;
let answer = [];
let out = "";

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  main();
  process.exit();
});

const RangeCheck = (x, y, m, n) => {
  if (x >= 0 && x < m && y >= 0 && y < n) {
    return true;
  } else {
    return false;
  }
};

const DFS = (x, y, m, n) => {
  visit[x][y] = 1;
  for (let k = 0; k < 4; k++) {
    let Xdx = x + dx[k];
    let Ydy = y + dy[k];
    if (
      RangeCheck(Xdx, Ydy, m, n) &&
      visit[Xdx][Ydy] === 0 &&
      arr[Xdx][Ydy] === 1
    ) {
      DFS(Xdx, Ydy, m, n);
    }
  }
};

const DFS_start = (m, n) => {
  for (let i = 0; i < m; i++) {
    for (let k = 0; k < n; k++) {
      if (visit[i][k] === 0 && arr[i][k] === 1) {
        all += 1;
        DFS(i, k, m, n);
      }
    }
  }
  answer.push(all);
  all = 0;
};

const main = () => {
  testCase = Number(input[0]);
  input = input.slice(1);
  for (let i = 0; i < testCase; i++) {
    let [m, n, k] = input[0].split(" ").map((el) => Number(el));
    input = input.slice(1);
    arr = Array(m)
      .fill(0)
      .map(() => Array(n).fill(0));
    visit = Array(m)
      .fill(0)
      .map(() => Array(n).fill(0));
    for (let caseNum = 0; caseNum < k; caseNum++) {
      let [x, y] = input[caseNum].split(" ").map((el) => Number(el));
      arr[x][y] = 1;
    }
    DFS_start(m, n);

    input = input.slice(k);
    arr = null;
  }
  for (let i = 0; i < answer.length; i++) {
    if (i === answer.length - 1) {
      out += answer[i];
    } else {
      out += answer[i] + "\n";
    }
  }
  console.log(out);
  return 0;
};

//main();
