const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = +input[0];
    const cards = input[1].split(' ').map(Number);
    
    const dp = Array.from({length: cards.length + 1}, () => 0);
    
    for(let i = 1; i <= N; i++) {
        for(let j = 1; j <= i; j++) {
            dp[i] = Math.max(dp[i], dp[i-j] + cards[j-1]);
        }
    }
    
    return dp[N];
}

console.log(solution(input));