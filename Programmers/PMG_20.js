let n = [];

function solution(N, stages) {
  var answer = [];
  for (let i = 0; i < stages.length; i++) {
    stages[i] = stages[i] - 1;
  }
  n = Array(N + 1)
    .fill(0)
    .map(() => Array(3).fill(0));
  for (let i = 0; i < n.length; i++) {
    n[i][0] = i + 1;
  }
  stages.forEach((el) => {
    n[el][1] = n[el][1] + 1;
  });
  let people = stages.length;
  n.forEach((el) => {
    if (people !== 0) {
      let a = el[1] / people;
      people = people - el[1];
      el[2] = a;
    } else {
      el[2] = 0;
    }
  });
  n.pop();
  n.sort((a, b) => {
    if (a[2] === b[2]) {
      return a[0] - b[0];
    } else {
      return b[2] - a[2];
    }
  });
  n.forEach((el) => {
    answer.push(el[0]);
  });
  //console.log(answer);
  return answer;
}

solution(4, [4, 4, 4, 4, 4]);
