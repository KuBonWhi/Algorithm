let result = "";
let [n, m] = [0, 0];
let visited = [];
const output = [];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  [n, m] = line.split(" ").map((el) => Number(el));
  visited = Array(n + 1).fill(0);
}).on("close", () => {
  solution();
  process.exit();
});

function dfs(idx, cnt) {
  if (cnt === m) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = idx; i <= n; i++) {
    if (visited[i] === 1) continue;
    // console.log(idx, i);
    visited[i] = 1;
    // console.log(visited);
    output.push(i);
    dfs(i, cnt + 1);

    output.pop();
    visited[i] = 0;
  }
}

const solution = () => {
  dfs(1, 0);
  console.log(result);
};
