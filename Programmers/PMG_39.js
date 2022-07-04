function solution(n, computers) {
  var answer = 0;
  const len = computers.length;
  const visited = Array(len).fill(false);

  const dfs = (index) => {
    visited[index] = true;

    for (let i = 0; i < len; i++) {
      if (computers[index][i] && !visited[i]) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < len; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
