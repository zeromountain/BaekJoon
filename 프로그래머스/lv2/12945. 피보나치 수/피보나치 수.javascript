function solution(n) {
    const memo = [0, 1, 1];
    for(let i = 3; i <= n; i += 1) {
        memo[i] = (memo[i - 2] + memo[i - 1]) % 1234567;
    }
    return memo[n];
}