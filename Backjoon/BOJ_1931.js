const input = [];

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

const solution = () => {
  let count = 1;
  let n = parseInt(input[0]);
  let arr = input.slice(1).map((el) => el.split(" ").map((al) => parseInt(al)));

  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let start = arr[0][1];

  arr.slice(1).forEach((ar) => {
    if (ar[0] >= start) {
      start = ar[1];
      count++;
    }
  });
  console.log(count);
};
