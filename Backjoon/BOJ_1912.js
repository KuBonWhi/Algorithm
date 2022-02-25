const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let array = [];
let n;
let maxNum = 0;

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  main();
  process.exit();
});

const max = (f, s) => {
  if (f >= s) {
    return f;
  } else {
    return s;
  }
};

const result = () => {
  const dp = Array(n).fill(0);
  dp[0] = array[0];
  maxNum = array[0];
  for (let i = 1; i < array.length; i++) {
    dp[i] = max(dp[i - 1] + array[i], array[i]);
    maxNum = max(maxNum, dp[i]);
  }
};

const main = () => {
  n = Number(input[0]);
  input[1].split(" ").map((el) => array.push(Number(el)));
  result();
  console.log(`${maxNum}`);
};
