function solution(genres, plays) {
  var answer = [];
  const maxGenr = {};
  const genreObj = {};

  for (let i = 0; i < plays.length; i++) {
    if (maxGenr[genres[i]]) {
      let before = maxGenr[genres[i]];
      maxGenr[genres[i]] = before + plays[i];
    } else {
      maxGenr[genres[i]] = plays[i];
    }

    if (genreObj[genres[i]]) {
      genreObj[genres[i]] = [...genreObj[genres[i]], [i, plays[i]]];
    } else {
      genreObj[genres[i]] = [[i, plays[i]]];
    }
  }

  const sortMaxArr = Object.entries(maxGenr).sort(([, a], [, b]) => b - a);
  Object.keys(genreObj).forEach((k) => {
    genreObj[k] = genreObj[k].sort((a, b) => b[1] - a[1]);
  });

  sortMaxArr.forEach((el) => {
    let genr = el[0];

    genreObj[genr].slice(0, 2).map((el) => answer.push(el[0]));
  });

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
