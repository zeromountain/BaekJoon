const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function sol(input) {
  const N = Number(input[0]);
  const counseling = input.slice(1).map(v => v.split(' ').map(v => Number(v)));

  const dp = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    const [cost, profit] = counseling[i];
    if (i + cost > N) continue;
    dp[i] = dp[i] + profit;
    for (let j = i + cost; j < N; j++) {
      dp[j] = Math.max(dp[j], dp[i]);
    }
  }
  return Math.max(...dp);
}

console.log(sol(input));