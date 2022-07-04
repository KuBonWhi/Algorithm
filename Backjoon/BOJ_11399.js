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
  const arr = input[1].split(" ").map((el) => parseInt(el));
  let answer = 0;
  let before = 0;

  arr.sort((a, b) => a - b);

  arr.forEach((el) => {
    before += el;
    answer += before;
  });
  console.log(answer);
};
