const solution = (s) => {
  let answer = "";
  let arr = s.split(" ").map((el) => Number(el));
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  answer = answer + min + " " + max;

  return answer;
};

console.log(solution("1 2 3 4"));
