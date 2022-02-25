const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  main();
  process.exit();
});

let answer = "";

const result = (num) => {
  if (num === 1) {
    return 1;
  } else if (num === 2) {
    return 2;
  } else if (num === 3) {
    return 4;
  } else {
    return result(num - 1) + result(num - 2) + result(num - 3);
  }
};

const main = () => {
  const n = Number(input[0]);
  input = input.slice(1);
  for (let i = 0; i < n; i++) {
    if (i === n - 1) {
      answer += `${result(Number(input[i]))}`;
    } else {
      answer += `${result(Number(input[i]))}` + "\n";
    }
  }
  console.log(answer);
};
