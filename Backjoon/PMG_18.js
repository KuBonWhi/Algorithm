let leftHand = -1;
let rightHand = -1;
let leftMap = new Map();
let rightMap = new Map();
let mainHand = "";
const pressKey = (numArr) => {
  let result = "";
  numArr.forEach((el) => {
    if (el === 1 || el === 4 || el === 7) {
      result += "L";
      leftHand = el;
    } else if (el === 3 || el === 6 || el === 9) {
      result += "R";
      rightHand = el;
    } else {
      if (el === 2) {
        result += leftRight(0, el);
      } else if (el === 5) {
        result += leftRight(1, el);
      } else if (el === 8) {
        result += leftRight(2, el);
      } else {
        result += leftRight(3, el);
      }
    }
  });
  return result;
};

const leftRight = (num, el) => {
  let l = leftMap.get(leftHand)[num];
  let r = rightMap.get(rightHand)[num];
  if (l === r) {
    if (mainHand === "right") {
      rightHand = el;
      return "R";
    } else {
      leftHand = el;
      return "L";
    }
  } else if (l > r) {
    rightHand = el;
    return "R";
  } else {
    leftHand = el;
    return "L";
  }
};

function solution(numbers, hand) {
  leftMap.set(1, [1, 2, 3, 4]);
  leftMap.set(4, [2, 1, 2, 3]);
  leftMap.set(7, [3, 2, 1, 2]);
  leftMap.set(-1, [4, 3, 2, 1]);

  leftMap.set(2, [0, 1, 2, 3]);
  leftMap.set(5, [1, 0, 1, 2]);
  leftMap.set(8, [2, 1, 0, 1]);
  leftMap.set(0, [3, 2, 1, 0]);

  rightMap.set(3, [1, 2, 3, 4]);
  rightMap.set(6, [2, 1, 2, 3]);
  rightMap.set(9, [3, 2, 1, 2]);
  rightMap.set(-1, [4, 3, 2, 1]);

  rightMap.set(2, [0, 1, 2, 3]);
  rightMap.set(5, [1, 0, 1, 2]);
  rightMap.set(8, [2, 1, 0, 1]);
  rightMap.set(0, [3, 2, 1, 0]);
  mainHand = hand;
  var answer = "";
  answer = pressKey(numbers);
  //console.log(answer);
  return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
