const inputCheck = (n) => {
  if (n === null || n === undefined || n <= 0) {
    return "err";
  } else {
    return Number(n);
  }
};

const main = (n) => {
  const numArr = [4, 1, 2];
  let answer = "";
  while (n) {
    answer = numArr[n % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  return answer;
};

function solution(n) {
  var answer = "";
  let inputNum = inputCheck(n);
  if (inputNum === "err") {
    return "err";
  } else {
    answer = main(inputNum);
    console.log(answer);
    return answer;
  }
}

solution(1);
solution(2);
solution(3);
solution(4);
