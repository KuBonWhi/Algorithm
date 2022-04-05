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

/*
let input = [
  "10 4200",
  "1",
  "5",
  "10",
  "50",
  "100",
  "500",
  "1000",
  "5000",
  "10000",
  "50000",
];
*/
let input = [];
let coin = [];
let sum = 0;

const main = () => {
  let [n, k] = input[0].split(" ").map((el) => Number(el));
  input = input.slice(1);
  input.forEach((el) => {
    coin.push(Number(el));
  });

  while (k > 0) {
    let min = parseInt(k / coin[0]);
    let arrayNum = 0;

    for (let i = 0; i < n; i++) {
      let num = parseInt(k / coin[i]);
      if (num !== 0 && min > num) {
        min = num;
        arrayNum = i;
      }
    }
    /*
    console.log(
      "coin : " + coin[arrayNum],
      "num : " + parseInt(k / coin[arrayNum])
    );
    */
    sum += parseInt(k / coin[arrayNum]);
    k = k % coin[arrayNum];
  }
  console.log(sum);
};

//main();
