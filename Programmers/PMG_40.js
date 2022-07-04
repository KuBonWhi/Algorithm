function solution(n, edge) {
  const connects = Array.from(Array(n), () => []);
  edge.forEach((e) => {
    connects[e[0] - 1].push(e[1] - 1);
    connects[e[1] - 1].push(e[0] - 1);
  });
  const visited = [1];
  const queue = [0];
  console.log(visited);
  while (queue.length) {
    const cur = queue.shift();

    connects[cur].forEach((next) => {
      if (!visited[next]) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    });
  }
  console.log(visited);

  const max = Math.max(...visited);

  return visited.filter((el) => el === max).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
