const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const sequence = input[1].split(' ').map(Number);
  sequence.sort((a, b) => a - b);

  const result = [];
  const temp = [];
  const check = Array.from({ length: N }, () => 0);

  function dfs(l) {
    if (l === M) {
      result.push(temp.slice());
      return;
    } else {
      for (let i = 0; i < N; i++) {
        if (!check[i]) {
          check[i] = 1;
          temp.push(sequence[i]);
          dfs(l + 1);
          temp.pop();
          check[i] = 0;
        }
      }
    }
  }

  dfs(0);
  // console.log(result);
  return result
    .map(el => el.join(' '))
    .reduce((acc, curr) => {
      acc += curr + '\n';
      return acc;
    }, '')
    .trim();
}

console.log(sol(input));