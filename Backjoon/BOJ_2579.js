"use strict";

let input = [];

const { stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

rl.on("line", (line) => input.push(line)).on("close", () => {
  main();
  process.exit();
});

const main = () => {
  let arr = [];
  let dp = [];
  let n = parseInt(input[0]);
  for (let i = 1; i <= n; i++) {
    arr.push(parseInt(input[i]));
  }

  dp[0] = arr[0];
  dp[1] = Math.max(arr[0] + arr[1], arr[1]);
  dp[2] = Math.max(arr[1] + arr[2], arr[0] + arr[2]);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(arr[i] + dp[i - 2], arr[i] + arr[i - 1] + dp[i - 3]);
  }

  console.log(`${dp[n - 1]}`);
};
