const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = +input[0];
const numbers = input[1].split(" ").map(Number);

const dp = new Array(N).fill(1);
for (let i = 1; i < N; i++) {
  const values = [1];
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      values.push(dp[j] + 1);
    }
  }
  dp[i] = Math.max(...values);
}
console.log(Math.max(...dp));