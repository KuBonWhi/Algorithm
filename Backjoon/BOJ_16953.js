const { format } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let a, b;
let queue = [];
let num = 0;
let find = -1;

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  main();
  process.exit();
});

const BFS_AB = () => {
  while (queue.length > 0) {
    num += 1;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let q = queue.shift();
      if (q === b) {
        find === 1;
        return;
      } else {
        if (q > b) {
          continue;
        } else {
          queue.push(q * 2);
          queue.push(q * 10 + 1);
        }
      }
    }
  }
  if (find === -1) {
    num = -1;
  }
};

const main = () => {
  [a, b] = input[0].split(" ").map((el) => Number(el));
  queue.push(a);
  BFS_AB();
  console.log(num);
};
