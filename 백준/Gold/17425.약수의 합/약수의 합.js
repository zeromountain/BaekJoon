const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const solution = (input) => {
    const [N, ...nums] = input;

    const sieve = Array(1000001).fill(1);
    const dp = Array(1000000);

    dp[0] = 0;

    for (let i = 2; i <= 1000000; i++) {
        for (let j = 1; i * j <= 1000000; j++) {
            sieve[i * j] += i;
        }
    }

    for (let i = 1; i <= 1000000; i++) {
        dp[i] = dp[i - 1] + sieve[i];
    }

    let res = '';

    for (let i = 0; i < N; i++) {
        res += `${dp[nums[i]]}\n`;
    }

    return res;
};

console.log(solution(input));