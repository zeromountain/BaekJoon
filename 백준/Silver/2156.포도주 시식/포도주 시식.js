const fs = require('fs');
const [N, ...wines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function sol(N, wines) {
  const dp = [0, wines[0], wines[0] + wines[1], ...Array.from({ length: N - 3 }, () => 0)];
  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(dp[i - 3] + wines[i - 2] + wines[i - 1], dp[i - 2] + wines[i - 1], dp[i - 1]);
  }
  return dp[N];
}

console.log(sol(N, wines));