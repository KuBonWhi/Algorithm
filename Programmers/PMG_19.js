let buket = [];
var answer = 0;
let boards = [];

const removeSame = () => {
  let check = 1;
  while (check === 1) {
    check = 0;
    if (
      buket.length >= 2 &&
      buket[buket.length - 1] === buket[buket.length - 2]
    ) {
      buket.pop();
      buket.pop();
      answer++;
      check = 1;
    }
  }
};

const pickDol = (num) => {
  for (let i = 0; i < boards.length; i++) {
    if (boards[i][num] !== 0) {
      let dol = boards[i][num];
      boards[i][num] = 0;
      buket.push(dol);
      break;
    }
  }
};

function solution(board, moves) {
  boards = board;
  for (let i = 0; i < moves.length; i++) {
    moves[i] = moves[i] - 1;
  }
  moves.forEach((el) => {
    pickDol(el);
    removeSame();
  });
  answer = answer * 2;
  //console.log(answer);
  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
