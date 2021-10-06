const input = [];
let n = 0;
let m = 0;
let box = [];
let sweet = [];
const x = [0, 1, 0, -1];
const y = [-1, 0, 1, 0];
let day = 0;
let pop_sweet = [];
let check = 1;
let answer = "";
let check2 = 0;

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

const make_sweet = (popy) => {
  let [c, l] = popy;
  for (let i = 0; i < 4; i++) {
    if (check_range(c + x[i], l + y[i])) {
      if (box[c + x[i]][l + y[i]] === 0) {
        box[c + x[i]][l + y[i]] = 1;
        sweet.push([c + x[i], l + y[i]]);
      }
    }
  }
};

const check_range = (l, c) => {
  if (l >= 0 && c >= 0 && l < m && c < n) {
    return true;
  } else {
    return false;
  }
};

const main = () => {
  [n, m] = input[0].split(" ").map(Number);
  for (let i = 1; i < input.length; i++) {
    box.push(input[i].split(" ").map(Number));
  }

  for (let i = 0; i < m; i++) {
    for (let k = 0; k < n; k++) {
      if (box[i][k] === 1) {
        sweet.push([i, k]);
      } else if (box[i][k] === 0) {
        check2 = 1;
      }
    }
  }

  while (sweet.length !== 0 && check2 === 1) {
    pop_sweet.push(sweet.pop());
    if (sweet.length === 0) {
      while (pop_sweet.length !== 0) {
        let popy = pop_sweet.pop();
        make_sweet(popy);
      }
      day += 1;
    }
  }

  if (check2 === 1) {
    for (let i = 0; i < m; i++) {
      for (let k = 0; k < n; k++) {
        if (box[i][k] === 0) {
          check = 0;
        }
      }
    }
  }
  if (check2 === 0) {
    answer += "0";
  } else if (check === 0) {
    answer += "-1";
  } else {
    day -= 1;
    answer += `${day}`;
  }
  console.log(answer);
};
