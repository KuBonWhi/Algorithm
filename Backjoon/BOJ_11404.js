const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution();
  process.exit();
});

const solution = () => {
  let result = "";
  const countryNum = Number(input[0]);
  const busNum = Number(input[1]);
  const routes = input.slice(2);
  const cost = Array(countryNum)
    .fill(Infinity)
    .map(() => Array(countryNum).fill(Infinity));

  for (let i = 0; i < countryNum; i++) cost[i][i] = 0;

  routes.forEach((route) => {
    const [start, end, price] = route.split(" ").map((el) => Number(el));

    if (cost[start - 1][end - 1] > cost[start - 1][start - 1] + price)
      cost[start - 1][end - 1] = cost[start - 1][start - 1] + price;
  });

  for (let mid = 0; mid < countryNum; mid++) {
    for (let start = 0; start < countryNum; start++) {
      for (let end = 0; end < countryNum; end++) {
        if (cost[start][mid] + cost[mid][end] < cost[start][end]) {
          cost[start][end] = cost[start][mid] + cost[mid][end];
        }
      }
    }
  }

  for (let start = 0; start < countryNum; start++) {
    for (let end = 0; end < countryNum; end++) {
      if (cost[start][end] === Infinity) {
        cost[start][end] = 0;
      }
    }
  }

  for (let i = 0; i < cost.length; i++) {
    if (i === cost.length - 1) {
      result += cost[i].join(" ");
    } else {
      result += cost[i].join(" ") + "\n";
    }
  }

  console.log(result);
};
