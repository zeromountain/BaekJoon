const fs = require('fs');
const [N, ...numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function sol(N, numbers) {
  const dp = [0, 1, 2, 4];
  const MAX = Math.max(...numbers);

  for (let i = 4; i <= MAX; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
  }

  for (let number of numbers) {
    console.log(dp[number])
  }
}

sol(N, numbers);