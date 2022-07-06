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
  const n = parseInt(input[0]);
  const a = input[1].split(" ").map((el) => parseInt(el));
  const b = input[2].split(" ").map((el) => parseInt(el));
  let answer = 0;

  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    answer += a[i] * b[i];
  }

  console.log(answer);
};

//solution();
