const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function sol(N, M) {
  const result = [];
  const temp = [];
  const check = Array.from({ length: N }, () => 0);

  function dfs(l) {
    if (l === M) {
      result.push(temp.slice());
      return;
    } else {
      for (let i = 1; i <= N; i++) {
        if (!check[i]) {
          check[i] = 1;
          temp.push(i);
          dfs(l + 1);
          temp.pop();
          check[i] = 0;
        }
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