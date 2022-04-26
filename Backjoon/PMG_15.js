const reportArr = (report) => {
  const arr = [];
  report.forEach((el) => {
    arr.push(el.split(" "));
  });
  return arr;
};

function solution(id_list, report, k) {
  var answer = [];
  const idMap = new Map();
  const messageId = new Map();
  const reArr = reportArr(report);
  reArr.forEach((el) => {
    if (idMap.get(el[1]) == undefined) {
      let newSet = new Set([el[0]]);
      idMap.set(el[1], newSet);
    } else {
      let mapEl = idMap.get(el[1]);
      let newSet = new Set([...mapEl, el[0]]);
      idMap.set(el[1], newSet);
    }
  });
  idMap.forEach((el) => {
    if (el.size >= k) {
      let list = [...el];
      for (let i = 0; i < list.length; i++) {
        if (messageId.get(list[i]) === undefined) {
          messageId.set(list[i], 1);
        } else {
          let num = messageId.get(list[i]);
          messageId.set(list[i], num + 1);
        }
      }
    }
  });
  id_list.forEach((el) => {
    if (messageId.get(el) === undefined) {
      answer.push(0);
    } else {
      let num = messageId.get(el);
      answer.push(num);
    }
  });
  console.log(answer);
  return answer;
}

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);
