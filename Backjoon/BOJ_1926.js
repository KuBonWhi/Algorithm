const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
let input = [
  "6 5",
  "1 1 0 1 1",
  "0 1 1 0 0",
  "0 0 0 0 0",
  "1 0 1 1 1",
  "0 0 1 1 1",
  "0 0 1 1 1",
];
*/
let input = [];
let array = [];
let visit;
let queue = [];
let num = 0;
let maxSize = 0;
let dx = [0, 1, 0, -1];
let dy = [-1, 0, 1, 0];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  main();
  process.exit();
});

const RangeCheck = (x, y, a, b) => {
  if (x >= 0 && x < a && y >= 0 && y < b) {
    return true;
  } else {
    return false;
  }
};

const BFS_Start = (a, b) => {
  for (let i = 0; i < a; i++) {
    for (let k = 0; k < b; k++) {
      if (array[i][k] === 1 && visit[i][k] === 0) {
        BFS(i, k, a, b);
        num += 1;
      }
    }
  }
};

const BFS = (x, y, a, b) => {
  queue.push([x, y]);
  let size = 1;
  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let [X, Y] = queue.shift();
      visit[X][Y] = 1;
      for (let k = 0; k < 4; k++) {
        if (
          RangeCheck(X + dx[k], Y + dy[k], a, b) &&
          array[X + dx[k]][Y + dy[k]] === 1 &&
          visit[X + dx[k]][Y + dy[k]] === 0
        ) {
          queue.push([X + dx[k], Y + dy[k]]);
          visit[X + dx[k]][Y + dy[k]] = 1;
          size += 1;
        }
      }
    }
  }

  if (maxSize < size) {
    maxSize = size;
  }
};

const main = () => {
  let [a, b] = input[0].split(" ").map((el) => Number(el));
  input = input.slice(1);
  input.forEach((el) => {
    let row = [];
    el.split(" ").map((el) => {
      row.push(Number(el));
    });
    array.push(row);
  });
  visit = Array(a)
    .fill(0)
    .map(() => Array(b).fill(0));
  BFS_Start(a, b);
  console.log(num);
  console.log(maxSize);
};
