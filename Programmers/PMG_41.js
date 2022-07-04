function solution(A, B) {
  var answer = 0;
  let start = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  A.forEach((a) => {
    if (a < B[start]) {
      answer++;
      start++;
    }
  });

  return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
