const main = (records) => {
  let answer = [];
  const map = new Map();

  records.forEach((record) => {
    const [state, id, nickName] = record.split(" ");
    if (state === "Leave") {
      answer.push([id, "님이 나갔습니다."]);
    } else if (state === "Enter") {
      answer.push([id, "님이 들어왔습니다."]);
      map.set(id, nickName);
    } else {
      map.set(id, nickName);
    }
  });
  return answer.map((el) => map.get(el[0]) + el[1]);
};

function solution(record) {
  var answer = [];
  answer = main(record);
  //console.log(answer);
  return answer;
}

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
