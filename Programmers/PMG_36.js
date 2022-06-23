const solution = (A, B) => {
  let aArr = A.sort((a, b) => a - b);
  let bArr = B.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < aArr.length; i++) {
    sum += aArr[i] * bArr[i];
  }

  return sum;
};

console.log(solution([1, 4, 2], [5, 4, 4]));
