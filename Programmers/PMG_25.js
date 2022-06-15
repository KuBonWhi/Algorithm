function solution(numbers) {
  var answer = 0;
  const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  numArr.forEach((num) => {
    let check = 0;

    numbers.forEach((number) => {
      if (num === number) check = 1;
    });

    if (check === 0) answer += num;
  });

  return answer;
}
