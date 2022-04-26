const makeArr = (p) => {
  let arr = [];
  for (let i = 0; i < p.length; i++) {
    arr.push([p[i], i]);
  }
  return arr;
};

const doPrint = (arr) => {
  let printArr = [];
  while (arr.length > 0) {
    let el = arr.shift();
    let check = 1;
    for (let i = 0; i < arr.length; i++) {
      if (el[0] < arr[i][0]) check = 0;
    }
    if (check === 0) {
      arr.push(el);
    } else {
      printArr.push(el);
    }
  }
  return printArr;
};

function solution(priorities, location) {
  var answer = 0;
  const plArr = makeArr(priorities);

  const printArr = doPrint(plArr);
  for (let i = 0; i < printArr.length; i++) {
    answer++;
    if (printArr[i][1] === location) {
      break;
    }
  }

  return answer;
}

solution([2, 1, 3, 2], 2);
