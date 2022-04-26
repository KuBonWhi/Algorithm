const makeResult = (s) => {
  let text = s
    .toLowerCase()
    .replace(/[^\w\-\.]/g, "")
    .replace(/[\.]{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");
  const len = text.length;
  return len > 2 ? text : text.padEnd(3, text[len - 1]);
};

function solution(new_id) {
  var answer = "";
  answer = makeResult(new_id);
  //console.log(answer);
  return answer;
}

solution("...!@BaT#*..y.abcdefghijklm");
