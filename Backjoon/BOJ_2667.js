let input = [];

const graph = [];
//let visited = [];
const dangi_num = [];
let num = 0;
let count = 0;
const updown_x = [-1, 0, 1, 0];
const updown_y = [0, -1, 0, 1];
let answer = "";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  main();
  process.exit();
});

const findAll = (i, k) => {
  if (rangChek(i, k) && graph[i][k] === 1) {
    graph[i][k] = 0;
    count += 1;
    for (let q = 0; q < 4; q++) {
      findAll(i + updown_y[q], k + updown_x[q]);
    }
  }
};

const rangChek = (i, j) => {
  if (i >= 0 && i < num && j >= 0 && j < num) {
    return true;
  } else return false;
};

const main = () => {
  num = Number(input[0]);

  for (let i = 1; i < input.length; i++) {
    graph.push(input[i].split("").map(Number));
  }

  for (let i = 0; i < num; i++) {
    for (let k = 0; k < num; k++) {
      if (graph[i][k] === 1) {
        findAll(i, k);
        dangi_num.push(count);
        count = 0;
      }
    }
  }
  dangi_num.sort((a, b) => a - b);
  answer += `${dangi_num.length}`;
  for (let i = 0; i < dangi_num.length; i++) {
    if (i !== dangi_num.length) {
      answer += "\n";
    }
    answer += `${dangi_num[i]}`;
  }
  console.log(answer);
};
