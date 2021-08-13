"use strict";

let input = "";
let world = [];
let answer = "";
let tagCheck = 1;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input = line;
}).on("close", () => {
  main();
  process.exit();
});

const main = () => {
  for (let i = 0; i <= input.length; i++) {
    if (input[i] === "<") {
      if (world.length > 0) {
        world.reverse();
        for (let i = 0; i < world.length; i++) {
          answer += world[i];
        }
        world = [];
      }
      tagCheck = 0;
      answer += input[i];
      answer;
    } else if (input[i] === ">") {
      tagCheck = 1;
      answer += input[i];
    } else {
      if (tagCheck === 1) {
        if (input[i] === " ") {
          world.reverse();
          for (let i = 0; i < world.length; i++) {
            answer += world[i];
          }
          world = [];
          answer += input[i];
        } else if (i === input.length) {
          if (world.length > 0) {
            world.reverse();
            for (let i = 0; i < world.length; i++) {
              answer += world[i];
            }
            world = [];
          }
          answer += "\n";
        } else {
          world.push(input[i]);
        }
      } else {
        answer += input[i];
      }
    }
  }
  console.log(answer);
};
