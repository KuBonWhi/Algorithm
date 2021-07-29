"use strict";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  main(line);
  rl.close();
}).on("close", () => process.exit());

const main = (line) => {
  let num = parseInt(line);
  let cardSet = [];

  for (let i = 0; i < num; i++) {
    cardSet[i] = i + 1;
  }
  let startLength = cardSet.length;

  while (cardSet.length > 1) {
    let nextCardSet = [];
    if (cardSet.length % 2 === 0) {
      for (let i = 0; i < cardSet.length; i++) {
        if (i % 2 === 1) {
          nextCardSet.push(cardSet[i]);
        }
      }
    } else {
      nextCardSet.push(cardSet.pop());
      for (let i = 0; i < cardSet.length; i++) {
        if (i % 2 === 1) {
          nextCardSet.push(cardSet[i]);
        }
      }
    }
    cardSet = nextCardSet;
  }
  console.log(String(cardSet));
};
