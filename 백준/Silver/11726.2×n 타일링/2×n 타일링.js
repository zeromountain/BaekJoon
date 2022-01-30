const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();

function sol(n) {
  const fibo = [1, 1, 2, ...Array.from({ length: n - 2 }, () => 0)];

  for (let i = 3; i <= n; i++) {
    fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 10007;
  }

  return fibo[n];
}

console.log(sol(input));