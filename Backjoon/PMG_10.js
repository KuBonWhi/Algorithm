// 1 : - , 2 : *, 3 : +
//const output = [];
//const combiArr = [];
//const visit = [0, 0, 0, 0];
/*
const combi = (cnt) => {
  if (cnt === 3) {
    let [a, b, c] = output;
    combiArr.push([a, b, c]);
    return;
  }
  for (let i = 1; i <= 3; i++) {
    if (visit[i] === 1) continue;
    visit[i] = 1;
    output.push(i);
    combi(cnt + 1);
    output.pop();
    visit[i] = 0;
  }
};
*/

const example = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];
// 1 : - , 2 : *, 3 : +

const strToArr = (str) => {
  let arr = [];
  let num = "";
  for (let i = 0; i <= str.length; i++) {
    if (
      str[i] === "-" ||
      str[i] === "*" ||
      str[i] === "+" ||
      str[i] === undefined
    ) {
      arr.push(parseInt(num));
      num = "";
      if (str[i] !== undefined) {
        arr.push(str[i]);
      }
    } else {
      num += str[i];
    }
  }
  return arr;
};

const findEx = (ex) => {
  if (ex === "-") {
    return 1;
  } else if (ex === "*") {
    return 2;
  } else if (ex === "+") {
    return 3;
  } else {
    return -1;
  }
};

const sumArr = (ex, arr) => {
  let newArr = [];
  while (arr.length > 0) {
    let ar = arr.shift();
    if (findEx(ar) === ex) {
      let arNum = newArr.pop();
      let nexArNum = arr.shift();
      if (ex === 1) {
        newArr.push(arNum - nexArNum);
        //console.log("-", arNum, nexArNum, arNum - nexArNum);
      } else if (ex === 2) {
        newArr.push(arNum * nexArNum);
        //console.log("*", arNum, nexArNum, arNum * nexArNum);
      } else {
        newArr.push(arNum + nexArNum);
        //console.log("+", arNum, nexArNum, arNum + nexArNum);
      }
    } else {
      newArr.push(ar);
    }
  }
  return newArr;
};

function solution(expression) {
  var answer = 0;
  const answerArr = [];
  const arr = strToArr(expression);
  //console.log(arr);
  example.forEach((el) => {
    let copyArr = JSON.parse(JSON.stringify(arr));
    let [a, b, c] = el;
    copyArr = sumArr(a, copyArr);
    copyArr = sumArr(b, copyArr);
    copyArr = sumArr(c, copyArr);
    answerArr.push(Math.abs(copyArr));
  });
  answer = Math.max(...answerArr);
  //console.log(answer);
  return answer;
}

//solution("50*6-3*2");
/*
100 200 300 500 20
- * - +
*/
