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

//let input = ["6", "6", "10", "13", "9", "8", "1"];
let input = [];
let n;
let dp;
let arr = [];

const max = (a, b) => {
  return a > b ? a : b;
};
const solve = () => {
  if (n === 1) return arr[0];
  else if (n === 2) return arr[0] + arr[1];
  const dp = new Array(n).fill(0);
  dp[1] = arr[0];
  dp[2] = arr[0] + arr[1];
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(
      dp[i - 3] + arr[i - 2] + arr[i - 1],
      dp[i - 2] + arr[i - 1],
      dp[i - 1]
    );
  }
  return dp[n];
};

const main = () => {
  n = Number(input[0]);
  input = input.slice(1);
  dp = Array(n).fill(0);
  input.forEach((el) => {
    arr.push(Number(el));
  });
  console.log(solve());
};

//main();
