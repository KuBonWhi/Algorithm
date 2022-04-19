const deleteStr = (s) => {
  const stack = [];
  for (let index = 0; index < s.length; index++) {
    if (index === 0) {
      stack.push(s[index]);
    } else {
      if (stack[stack.length - 1] === s[index]) {
        stack.pop();
      } else {
        stack.push(s[index]);
      }
    }
  }
  return stack.length ? 0 : 1;
};

function solution(s) {
  var answer = -1;
  answer = deleteStr(s);
  return answer;
}

solution("baabaa");
solution("cdcd");
