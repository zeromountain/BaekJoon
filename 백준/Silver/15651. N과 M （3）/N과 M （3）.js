const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);


function sol(N, M) {
  const result = [];
  const temp = [];

  function dfs(l) {
    if (l === M) {
      // M개를 선택한 경우
      result.push(temp.slice());
      return;
    } else {
      for (let i = 1; i <= N; i++) {
        temp.push(i);
        dfs(l + 1);
        temp.pop();
      }
    }
  }
  dfs(0);
  return result
    .map(el => el.join(' '))
    .reduce((acc, curr) => {
      acc += curr + '\n';
      return acc;
    }, '')
    .trim();
}

console.log(sol(N, M));