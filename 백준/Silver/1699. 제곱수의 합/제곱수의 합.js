const fs = require('fs');
const N = +fs.readFileSync('./dev/stdin').toString().trim();

const dp = Array.from(Array(N+1), () => Infinity);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for(let i = 4; i <= N; i++) {
    for(let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i-j*j]+1);
    }
}

console.log(dp[N]);