const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString().trim();

function sol(N) {
  const dp = [1, 3];
  for (let i = 2; i <= N; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
  }

  return dp[N];
}

console.log(sol(N));