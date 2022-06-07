const inputCheck = (operations) => {
  if (operations === null || operations === undefined) {
    console.log("err");
  } else {
    const input = [];
    operations.forEach((el) => {
      input.push(el.split(" "));
    });
    return input;
  }
};

const main = (inputArr) => {
  let queue = [];
  let result = null;
  inputArr.forEach((el) => {
    queue = findWord(el[0], el[1], queue);
  });
  result = checkQueue(queue);
  return result;
};

const findWord = (oper, num, q) => {
  const number = parseInt(num);
  const queue = q;

  if (oper === "I") {
    queue.push(number);
    return queue;
  } else {
    if (queue.length !== 0) {
      if (number === 1) {
        const maxNum = Math.max(...queue);
        const newQueue = queue.filter((el) => el !== maxNum);
        return newQueue;
      } else {
        const minNum = Math.min(...queue);
        const newQueue = queue.filter((el) => el !== minNum);
        return newQueue;
      }
    }
  }
};

const checkQueue = (queue) => {
  if (queue.length === 0) {
    return [0, 0];
  } else {
    return [Math.max(...queue), Math.min(...queue)];
  }
};

function solution(operations) {
  var answer = [];

  const inputArr = inputCheck(operations);
  answer = main(inputArr);
  console.log(answer);

  return answer;
}

solution(["I 16", "D 1"]);
