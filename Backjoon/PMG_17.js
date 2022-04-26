const numArr = [
  ["0", "zero"],
  ["1", "one"],
  ["2", "two"],
  ["3", "three"],
  ["4", "four"],
  ["5", "five"],
  ["6", "six"],
  ["7", "seven"],
  ["8", "eight"],
  ["9", "nine"],
];

function solution(s) {
  var answer = 0;

  for (let i = 0; i < numArr.length; i++) {
    var regexp = new RegExp(`${numArr[i][1]}`, "gi");
    s = s.replace(regexp, numArr[i][0]);
  }

  answer = Number(s);
  //console.log(answer);
  return answer;
}

solution("23four5six7");
