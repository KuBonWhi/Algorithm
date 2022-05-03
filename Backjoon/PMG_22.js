const makeArr = (s) => {
  const arr = [];
  let num = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "S" || s[i] === "D" || s[i] === "T") {
      let number = Number(num);
      num = "";
      if (s[i] === "S") {
        arr.push(number);
      } else if (s[i] === "D") {
        arr.push(number * number);
      } else {
        arr.push(number * number * number);
      }
    } else if (s[i] === "*" || s[i] === "#") {
      if (s[i] === "*") {
        arr[arr.length - 1] = 2 * arr[arr.length - 1];
        arr[arr.length - 2] = 2 * arr[arr.length - 2];
      } else {
        arr[arr.length - 1] = -1 * arr[arr.length - 1];
      }
    } else {
      num += s[i];
    }
  }
  return arr;
};

function solution(dartResult) {
  var answer = 0;
  const arr = makeArr(dartResult);
  arr.forEach((el) => {
    answer += el;
  });

  return answer;
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
