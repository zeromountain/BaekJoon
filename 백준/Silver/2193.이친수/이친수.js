const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

function sol(N) {
    const dp = [0, 1, 1]
    
    for(let i = 3; i <= N; i++) {
        dp[i] = BigInt(dp[i-1]) + BigInt(dp[i-2])
    }
    
    return BigInt(dp[N]).toString();
}

console.log(sol(input));