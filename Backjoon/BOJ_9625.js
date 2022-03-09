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

let input = [];
let n;
let dp;
let answer = "";

const auto = () => {
  for (let i = 1; i < n + 1; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
    dp[i][1] = dp[i - 1][0];
  }
};

const main = () => {
  n = Number(input[0]);
  dp = Array(n + 1)
    .fill(0)
    .map(() => Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = 1;
  auto();
  answer = dp[n][1] + " " + dp[n][0];
  console.log(answer);
};

//main();
