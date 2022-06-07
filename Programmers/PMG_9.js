const combination = (menu, order, cnt, idx, prev) => {
  if (prev.length === cnt) {
    let curStr = prev.sort().join("");
    if (menu.has(curStr)) menu.set(curStr, menu.get(curStr) + 1);
    else menu.set(curStr, 1);
  }
  for (let i = idx; i < order.length; i++) {
    combination(menu, order, cnt, i + 1, [...prev, order[i]]);
  }
};

function solution(orders, course) {
  var answer = [];
  let menu = new Map();

  orders.map((order) => {
    course.map((cnt) => combination(menu, order, cnt, 0, []));
  });

  menu = [...menu.entries()].filter((elem) => elem[1] >= 2);

  course.map((cnt) => {
    let max = 0;
    let tmp = menu.filter(([str, num]) => {
      if (max < num && str.length === cnt) max = num;
      return str.length === cnt;
    });
    tmp.filter((x) => x[1] === max).map((x) => answer.push(x[0]));
  });

  answer.sort();
  return answer;
}

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);
//solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]);
//solution(["XYZ", "XWY", "WXA"], [2, 3, 4]);
