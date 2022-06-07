const dfs = (depth, sum, numbers, target) => {
  if (numbers.length === depth) {
    if (sum === target) {
      console.log("target");
      return 1;
    }
    return 0;
  } else {
    return (
      dfs(depth + 1, sum + numbers[depth], numbers, target) +
      dfs(depth + 1, sum - numbers[depth], numbers, target)
    );
  }
};

function solution(numbers, target) {
  var answer = 0;
  answer = dfs(0, 0, numbers, target);
  console.log(answer);
  return answer;
}

solution([1, 1, 1, 1, 1], 3);
