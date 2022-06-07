const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution();
  process.exit();
});

const input = [];

let len = Infinity;
let N = 0;
let M = 0;
let arr = [];

const stringToInput = () => {
  [N, M] = input[0].split(" ").map((el) => Number(el));
  arr = input[1].split(" ").map((el) => Number(el));
};

// 1 1 1 1           4
const towPointer = () => {
  let start = 0;
  let end = 0;
  let sum = 0;

  while (end <= N) {
    if (sum === M) {
      len = Math.min(len, end - start);
      sum += arr[end++];
    } else if (sum > M) {
      len = Math.min(len, end - start);
      sum -= arr[start++];
    } else {
      sum += arr[end++];
    }
  }
};

const solution = () => {
  stringToInput();
  towPointer();

  console.log(len === Infinity ? 0 : len);
};
