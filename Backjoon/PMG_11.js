const makeArr = (s) => {
  const arr = [];
  s = s.slice(1, s.length - 1);
  let open = 0;
  let list = [];
  let num = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{") {
      open = 1;
    } else if (s[i] === "}") {
      open = 0;
      list.push(parseInt(num));
      num = "";
      arr.push(list);
      list = [];
    } else if (s[i] === ",") {
      if (open === 1) {
        list.push(parseInt(num));
        num = "";
      }
    } else {
      num += s[i];
    }
  }
  return arr;
};

function solution(s) {
  var answer = [];
  const arrMap = new Map();
  const test = new Map();
  const arr = makeArr(s);

  arr.forEach((el) => {
    arrMap.set(el.length, el);
  });
  for (let i = 1; i <= arr.length; i++) {
    let ar = arrMap.get(i);
    if (i === 1) {
      answer.push(ar[0]);
    } else {
      ar.forEach((el) => {
        let check = 1;
        for (let k = 0; k < answer.length; k++) {
          if (el === answer[k]) {
            check = 0;
          }
        }

        if (check === 1) {
          answer.push(el);
        }
      });
    }
  }

  return answer;
}

solution("{{123}}");
