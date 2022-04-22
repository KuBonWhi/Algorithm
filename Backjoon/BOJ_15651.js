const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  [n, m] = line.split(" ").map((el) => Number(el));
}).on("close", () => {
  solution();
  process.exit();
});

let answer = "";
let [n, m] = [0, 0];
const output = [];

const dfs = (cnt) => {
  if (cnt === m) {
    answer += `${output.join(" ")}\n`;
    return;
  }
  for (let i = 1; i <= n; i++) {
    output.push(i);
    dfs(cnt + 1);
    output.pop();
  }
};

const solution = () => {
  dfs(0);
  console.log(answer);
};
