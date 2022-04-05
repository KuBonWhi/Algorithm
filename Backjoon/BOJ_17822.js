const input = [];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution();
  process.exit();
});

const inputCheck = () => {
  if (input === null || input === undefined) {
    console.log("null err");
    return [];
  } else {
    const inputArr = [];
    input.map((el) => {
      inputArr.push(el.split(" ").map((al) => parseInt(al)));
    });
    return inputArr;
  }
};

// 메인 로직
const main = (inputArray) => {
  const [boardNum, numberNum, timeNum] = inputArray[0];

  let boards = [];
  let zeroArr = Array(numberNum).fill(-1);
  boards.push(zeroArr);
  for (let i = 1; i < 1 + boardNum; i++) {
    boards.push(inputArray[i]);
  }

  for (let i = timeNum; i >= 1; i--) {
    let [x, d, k] = inputArray[inputArray.length - i];
    let check = 0;
    for (let multi = 1; multi < boards.length; multi++) {
      if (multi % x === 0) {
        boards = rotate(boards, multi, d, k);
      }
    }
    [boards, check] = findSameNum(boards);

    if (check === 0) {
      boards = notSameNum(boards);
    }
  }
  return boards;
};

const rotate = (boards, x, d, k) => {
  let copyBoards = boards;
  if (d === 0) {
    for (let i = 0; i < k; i++) {
      let last = copyBoards[x].pop();
      copyBoards[x].unshift(last);
    }

    return copyBoards;
  } else {
    for (let i = 0; i < k; i++) {
      let first = copyBoards[x].shift();
      copyBoards[x].push(first);
    }

    return copyBoards;
  }
};

const rangeCheck = (x, boardsNum) => {
  if (x >= 0 && x < boardsNum) {
    return true;
  } else {
    return false;
  }
};

const findSameNum = (boards) => {
  let check = 0;
  let copyBoards = JSON.parse(JSON.stringify(boards));
  const boardsNum = boards.length;
  const boardNum = boards[1].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  for (let board = 1; board < boardsNum; board++) {
    for (let el = 0; el < boardNum; el++) {
      for (let i = 0; i < 4; i++) {
        let y = 0;
        if (el + dy[i] < 0) {
          y = boardNum - 1;
        } else if (el + dy[i] >= boardNum) {
          y = 0;
        } else {
          y = el + dy[i];
        }
        if (rangeCheck(board + dx[i], boardsNum)) {
          if (
            boards[board][el] === boards[board + dx[i]][y] &&
            boards[board][el] !== 0
          ) {
            check = 1;
            copyBoards[board][el] = 0;
            copyBoards[board + dx[i]][y] = 0;
          }
        }
      }
    }
  }

  return [copyBoards, check];
};

const notSameNum = (boards) => {
  let copyBoards = JSON.parse(JSON.stringify(boards));
  let count = 0;
  let sum = 0;
  let middle = 0;
  for (let board = 1; board < boards.length; board++) {
    for (let el = 0; el < boards[1].length; el++) {
      if (boards[board][el] !== 0) {
        sum += boards[board][el];
        count++;
      }
    }
  }

  middle = sum / count;

  for (let board = 1; board < boards.length; board++) {
    for (let el = 0; el < boards[1].length; el++) {
      if (boards[board][el] < middle && boards[board][el] !== 0) {
        copyBoards[board][el] += 1;
      }
      if (boards[board][el] > middle && boards[board][el] !== 0) {
        copyBoards[board][el] -= 1;
      }
    }
  }

  return copyBoards;
};

// 결과 데이터 가공
const outPut = (beforeResult) => {
  let sum = 0;
  for (let board = 1; board < beforeResult.length; board++) {
    for (let el = 0; el < beforeResult[1].length; el++) {
      sum += beforeResult[board][el];
    }
  }
  return sum;
};

const solution = () => {
  const inputArray = inputCheck();
  const beforeResult = main(inputArray);
  const afterResult = outPut(beforeResult);
  console.log(afterResult);
};
