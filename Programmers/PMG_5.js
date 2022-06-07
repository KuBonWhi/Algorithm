const makeArray = (r, c) => {
  let num = 1;
  const arr = Array(r)
    .fill(0)
    .map((el) => Array(c).fill(0));
  for (let i = 0; i < r; i++) {
    for (let k = 0; k < c; k++) {
      arr[i][k] = num;
      num++;
    }
  }
  return arr;
};

const makeQueries = (q) => {
  for (let i = 0; i < q.length; i++) {
    for (let k = 0; k < q[0].length; k++) {
      q[i][k] = q[i][k] - 1;
    }
  }
};

const getLine = (arr, querie) => {
  const [x1, y1, x2, y2] = querie;
  const queue = [];
  let min = 0;
  for (let i = 0; i < y2 - y1; i++) queue.push(arr[x1][y1 + i]);

  for (let i = 0; i < x2 - x1; i++) queue.push(arr[x1 + i][y2]);
  for (let i = 0; i < y2 - y1; i++) queue.push(arr[x2][y2 - i]);
  for (let i = 0; i < x2 - x1; i++) queue.push(arr[x2 - i][y1]);
  queue.unshift(queue.pop());
  min = Math.min(...queue);
  return [min, queue];
};

const insertChanged = (arr, line, querie) => {
  const [x1, y1, x2, y2] = querie;
  for (let i = 0; i < y2 - y1; i++) arr[x1][y1 + i] = line.shift();
  for (let i = 0; i < x2 - x1; i++) arr[x1 + i][y2] = line.shift();
  for (let i = 0; i < y2 - y1; i++) arr[x2][y2 - i] = line.shift();
  for (let i = 0; i < x2 - x1; i++) arr[x2 - i][y1] = line.shift();
};

function solution(rows, columns, queries) {
  var answer = [];
  const arr = makeArray(rows, columns);
  makeQueries(queries);
  queries.forEach((querie) => {
    const [min, line] = getLine(arr, querie);
    answer.push(min);
    insertChanged(arr, line, querie);
  });
  console.log(answer);
  return answer;
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);
