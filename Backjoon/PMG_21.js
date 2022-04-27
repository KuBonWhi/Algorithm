let a = [];
let b = [];
let N = 0;
var answer = [];

const makeArea = () => {
  for (let col = 0; col < N; col++) {
    let arr = "";
    for (let low = 0; low < N; low++) {
      if (a[col][low] === 0 && b[col][low] === 0) {
        arr += " ";
      } else {
        arr += "#";
      }
    }
    answer.push(arr);
  }
};

function solution(n, arr1, arr2) {
  N = n;
  arr1.forEach((el) => {
    let arr = el
      .toString(2)
      .split("")
      .map((el) => Number(el));
    if (arr.length < n) {
      while (arr.length < n) {
        arr.unshift(0);
      }
    }
    a.push(arr);
  });
  arr2.forEach((el) => {
    let arr = el
      .toString(2)
      .split("")
      .map((el) => Number(el));
    if (arr.length < n) {
      while (arr.length < n) {
        arr.unshift(0);
      }
    }
    b.push(arr);
  });
  makeArea();
  //console.log(answer);
  return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
