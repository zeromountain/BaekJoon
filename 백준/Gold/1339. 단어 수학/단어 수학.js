const fs = require('fs');
let [elCount, ...arr] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n');

function sol(arr) {
  const strDigit = {};
  arr.map(elements => {
    elements
      .split('')
      .reverse() // 기존 상태이면 큰 자리수의 인덱스가 0번부터 시작
      .forEach((str, idx) => {
        strDigit[str] = strDigit[str] ? strDigit[str] + 10 ** idx : 10 ** idx;
      });
  });

  const strDigitArr = Object.values(strDigit).sort((a, b) => b - a); // 자리수가 큰 요소부터 정렬
  let num = 9;
  let sum = 0;
  for (let a of strDigitArr) {
    sum += a * num--;
  }
  console.log(sum);
}

sol(arr);