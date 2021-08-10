"use strict";

let input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    main();
    process.exit();
  });

const main = () => {
  const n = parseInt(input[0]);
  input = input.slice(1);
  const dp = [];
  for (let i = 0; i < input.length; i++) {
    dp.push(input[i].split(" ").map((el) => parseInt(el)));
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let prev;
      if (j === 0) prev = dp[i - 1][j];
      else if (j === i) prev = dp[i - 1][j - 1];
      else prev = Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      dp[i][j] += prev;
    }
  }
  console.log(`${Math.max(...dp[input.length - 1])}`);
};
