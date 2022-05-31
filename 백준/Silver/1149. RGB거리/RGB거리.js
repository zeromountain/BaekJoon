const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
function sol(input) {
  let [len, ...costs] = input;
  len = +len;
  costs = costs.map(el => el.split(' ').map(Number));
  // 인덱스를 1부터 시작하는 이유 → 2번 집의 선택을 기준으로 1번집과 3번집의 비용 선택
  for (let i = 1; i < len; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]); // i번 집이 R을 선택한 경우 → i-1번 집이 선택할 수 있는 컬러는 G와 B
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]); // i번 집이 G를 선택한 경우 → i-1번 집이 선택할 수 있는 컬러는 R과 B
    costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]); // i번 집이 B를 선택한 경우 → i-1번 집이 선택할 수 있는 컬러는 R과 G
  }
  // for loop 전체를 순회하면 각각 집의 도색 비용을 costs 배열의 마지막 요소에서 확인 가능하므로 마지막 요소에서 최소값을 반환
  return Math.min(...costs[len - 1]);
}
console.log(sol(input));