const rank = (n) => {
  switch (n) {
    case 6:
      return 1;
      break;
    case 5:
      return 2;
      break;
    case 4:
      return 3;
      break;
    case 3:
      return 4;
      break;
    case 2:
      return 5;
      break;
    default:
      return 6;
  }
};

function solution(lottos, win_nums) {
  let collectNum = 0;
  let randomNum = 0;

  lottos.forEach((lotto) => {
    if (lotto === 0) randomNum++;
  });

  win_nums.forEach((win_num) => {
    lottos.forEach((lotto) => {
      if (lotto === win_num) collectNum++;
    });
  });

  return [rank(collectNum + randomNum), rank(collectNum)];
}

console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
