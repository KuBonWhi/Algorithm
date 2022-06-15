let cnt = 0;
const check = 1;

const checkS = (arr) => {
  const stack = [];

  for (const item of arr) {
    stack.push(item);

    if (stack.length >= 2) {
      while (
        (stack[stack.length - 2] === "(" && stack[stack.length - 1] == ")") ||
        (stack[stack.length - 2] === "[" && stack[stack.length - 1] == "]") ||
        (stack[stack.length - 2] === "{" && stack[stack.length - 1] == "}")
      ) {
        stack.pop();
        stack.pop();
      }
    }
  }

  return stack.length ? false : true;
};

function solution(s) {
  let strArr = s.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (i === 0) {
      let TF = checkS(strArr);
      if (TF === true) cnt++;
    } else {
      let ch = strArr.shift();
      strArr.push(ch);
      let TF = checkS(strArr);
      if (TF === true) cnt++;
    }
  }

  return cnt;
}

console.log(solution("[](){}"));
