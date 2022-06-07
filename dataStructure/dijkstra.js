let arr = [
  [0, 2, 5, 1, Infinity, Infinity],
  [2, 0, 3, 2, Infinity, Infinity],
  [5, 3, 0, 3, 1, 5],
  [1, 2, 3, 0, 1, Infinity],
  [Infinity, Infinity, 1, 1, 0, 2],
  [Infinity, Infinity, 5, Infinity, 2, 0],
];

let number = 6;
let v = [false, false, false, false, false, false];
let d = [0, 0, 0, 0, 0, 0];

const getSmallIndex = () => {
  let min = Infinity;
  let index = 0;

  for (let i = 0; i < number; i++) {
    if (d[i] < min && !v[i]) {
      min = d[i];
      index = i;
    }
  }
  return index;
};

const dijkstra = (start) => {
  for (let i = 0; i < number; i++) {
    d[i] = arr[start][i];
  }

  v[start] = true;

  for (let i = 0; i < number - 2; i++) {
    let current = getSmallIndex();
    v[current] = true;
    for (let j = 0; j < number; j++) {
      if (!v[j] && d[current] + arr[current][j] < d[j]) {
        d[j] = d[current] + arr[current][j];
      }
    }
  }
};

const solution = () => {
  dijkstra(0);
  console.log("result : ", d);
};

solution();
