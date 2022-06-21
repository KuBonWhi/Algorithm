function solution(skill, skill_trees) {
  var answer = 0;

  skill_trees.forEach((skill_tree) => {
    let check = 1;
    let s = "";

    for (let i = 0; i < skill_tree.length; i++) {
      let el = skill_tree[i];
      if (skill.match(el)) {
        check = 0;
        s += el;
      }
    }

    if (check === 0) {
      if (skill.indexOf(s) === 0) answer++;
    } else {
      answer++;
    }
  });

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
