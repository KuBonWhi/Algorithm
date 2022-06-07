const main = (str, num) => {
  let s = "";
  let frontNum = 1;
  let index = 0;
  let nowIndex = num;
  while (1) {
    let mainS = str.slice(index, index + num);
    let nextS = str.slice(nowIndex, nowIndex + num);

    if (index >= str.length - 1) {
      if (frontNum === 1) {
        s = s + mainS;
      } else {
        s = s + frontNum + mainS;
        frontNum = 1;
      }
      break;
    }
    if (mainS === nextS) {
      frontNum++;
      index += num;
      nowIndex += num;
    } else {
      if (frontNum === 1) {
        s = s + mainS;
      } else {
        s = s + frontNum + mainS;
        frontNum = 1;
      }
      index += num;
      nowIndex += num;
    }
  }
  return s.length;
};

function solution(s) {
  var answer = 0;
  let lengthArr = [];
  for (let num = 1; num <= s.length; num++) {
    lengthArr.push(main(s, num));
  }
  answer = Math.min(...lengthArr);
  console.log(answer);
  return answer;
}

//solution("aabbaccc");
//solution("ababcdcdababcdcd");
//solution("abcabcdede");
//solution("abcabcabcabcdededededede");
solution("xababcdcdababcdcd");
