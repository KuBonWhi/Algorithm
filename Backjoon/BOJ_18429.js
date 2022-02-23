const input = ["7 1 2 3 4 5 6 7", "8 1 2 3 5 8 13 21 34", "0"];
let answer = "";
let reArray = [];

const roto = (index, select) => {
  let que = [];
  let check = index;
  console.log(index, "select : " + select);
  if (select[5] !== 0) {
    console.log(select);
    answer += select.join(" ");
    answer += "\n";
    if (reArray.length - index > 0) {
      select[5] = 0;
    } else {
      return;
    }
  }

  if (reArray.length - check >= 6) {
    while (reArray.length - check >= 6) {
      que.push(check);
      check += 1;
    }
  } else {
    que.push(check);
  }

  while (que.length > 0) {
    let popy = que.shift();
    select[popy] = popy + 1;
    roto((popy += 1), select);
  }
};

const main = () => {
  const array = input[0].split(" ").map(Number);

  reArray = array.filter((el, index) => {
    return array.indexOf(el) === index;
  });
  reArray.sort();
  let select = new Array(6).fill(0);
  roto(0, select);
  console.log(answer);
};

main();
