const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function sol(s) {
  const result = [];
  const temp = [];
  const check = Array.from({ length: N }, () => 0);

  function dfs(l, start) {
    if (l === M) {
      result.push(temp.slice());
      return;
    } else {
      for (let i = start; i <= N; i++) {
        temp.push(i);
        dfs(l + 1, i);
        temp.pop();
      }
    }
  }

  dfs(0, 1);
  return result
    .map(el => el.join(' '))
    .reduce((acc, curr) => {
      acc += curr + '\n';
      return acc;
    }, '')
    .trim();
}

console.log(sol(N, M));