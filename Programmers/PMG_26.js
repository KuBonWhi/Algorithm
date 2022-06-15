function solution(absolutes, signs) {
  var answer = 0;
  let len = absolutes.length;

  for (let index = 0; index < len; index++) {
    if (signs[index] === true) {
      answer += absolutes[index];
    } else {
      answer -= absolutes[index];
    }
  }

  return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
