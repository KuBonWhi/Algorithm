let arr;
let answer = 0;

const combi = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const combination = combi(rest, selectNum - 1);
    const attached = combination.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return result;
};

const checkPrime = (num) => {
  if (num == 0 || num == 1) return false;
  if (num == 2 || num == 3) return true;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

const changeStr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Number(arr[i].join("")));
  }
  return newArr;
};

function solution(numbers) {
  arr = numbers.split("");
  let Array = [];
  for (let i = 1; i <= arr.length; i++) {
    let arrStr = combi(arr, i);
    let arrNum = changeStr(arrStr);
    Array.push(...arrNum);
  }
  //console.log(Array);
  const numSet = new Set(Array);
  console.log(numSet);
  for (let el of numSet) {
    if (checkPrime(Number(el))) answer++;
  }
  //console.log(answer);
  return answer;
}

solution("011");
