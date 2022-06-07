const inputChange = (p, s) => {
  const arr = Array(p.length)
    .fill(0)
    .map(() => Array(2).fill(0));
  for (let index = 0; index < arr.length; index++) {
    arr[index][0] = p[index];
    arr[index][1] = s[index];
  }
  return arr;
};

const main = (arr) => {
  let ans = [];
  while (arr.length !== 0) {
    let count = 0;
    arr.forEach((el) => {
      el[0] = el[0] + el[1];
    });

    while (arr.length !== 0 && arr[0][0] >= 100) {
      let out = arr.shift();
      count++;
    }

    if (count !== 0) {
      ans.push(count);
    }
  }
  return ans;
};

function solution(progresses, speeds) {
  var answer = [];
  const arr = inputChange(progresses, speeds);
  answer = main(arr);
  //console.log(answer);
  return answer;
}

solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
