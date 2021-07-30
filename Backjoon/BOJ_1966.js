"use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLine = [];
let finish;
let controll = 0;
let answer = "";

rl.on("line", (line) => {
  inputLine.push(line.split(" "));
  finish = parseInt(inputLine[0][0]) * 2;

  if (finish === controll) {
    for (let i = 1; i <= finish; i += 2) {
      printerQ(
        parseInt(inputLine[i][0]),
        parseInt(inputLine[i][1]),
        inputLine[i + 1]
      );
    }
    //console.log(answer);
    console.log(answer);
    rl.close();
  }

  controll++;
});

const printerQ = (inputNum, inputFindIndex, inputInput) => {
  const num = inputNum;
  const findIndex = inputFindIndex;
  let input = inputInput;

  let whileCount = 0;
  let whilearray = input.map((item) => item);
  const maxArray = [];

  while (whileCount < num) {
    let max = 0;
    let check = 0;
    for (let a = 0; a < num; a++) {
      if (whilearray[a] >= max) {
        max = whilearray[a];
        check = a;
      }
    }
    whilearray[check] = -1;
    maxArray.push(max);
    whileCount++;
  }
  let i = 0;
  let count = 0;

  let maxIndex = 0;

  while (1) {
    i = i % num;
    if (input[i] === maxArray[maxIndex]) {
      if (i === findIndex) {
        count++;
        break;
      } else {
        count++;
        maxIndex++;
        input[i] = -1;
      }
    }
    i++;
  }

  answer += count + "\n";
};
