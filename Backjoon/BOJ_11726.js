"use strict";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  main(line);
  rl.close();
}).on("close", () => {
  process.exit();
});

const main = (line) => {
  line = parseInt(line);
  const dp = new Array(line + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= line; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }
  console.log(`${dp[line]}`);
};
