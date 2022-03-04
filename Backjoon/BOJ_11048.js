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

//let input = ["4 3", "1 2 3", "6 5 4", "7 8 9", "12 11 10"];
let input = [];
let arr = [];
let dp;
const dx = [1, 1, 0];
const dy = [0, 1, 1];
let n, m;

const max = (a, b) => {
  return a > b ? a : b;
};

const main = () => {
  [n, m] = input[0].split(" ").map((el) => Number(el));
  dp = Array(n + 2)
    .fill(0)
    .map(() => Array(m + 2).fill(0));
  input = input.slice(1);
  let zero = Array(m + 1).fill(0);
  arr.push(zero);
  input.forEach((el) => {
    let line = [];
    line.push(0);
    el.split(" ").map((one) => line.push(Number(one)));
    arr.push(line);
  });
  arr.push(zero);
  for (let i = 1; i < n + 2; i++) {
    for (let k = 1; k < m + 2; k++) {
      let result = 0;
      result = max(dp[i - 1][k - 1], max(dp[i][k - 1], dp[i - 1][k]));
      dp[i][k] = result + arr[i][k];
    }
  }
  console.log(dp[n][m]);
};

//main();
