const fs = require('fs');
const input = fs.readFileSync('./dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number));

function sol(input) {
  
  const [[len, M], numbers] = input;
  let count = 0;

  for (let lt = 0; lt < numbers.length; lt++) {
    let sum = numbers[lt];
    let rt = lt;

    while (sum < M && rt < len - 1) {
      rt++;
      sum += numbers[rt];
    }

    if (sum === M) count++;
  }

  return count;
}

console.log(sol(input));