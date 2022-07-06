//const input = ["1"];
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
  const coins = [500, 100, 50, 10, 5, 1];
  let count = 0;
  let left = 1000 - parseInt(input);

  coins.forEach((coin) => {
    if (parseInt(left / coin) !== 0) {
      count += parseInt(left / coin);
      left = left % coin;
    }
  });
  console.log(count);
};

//solution();
