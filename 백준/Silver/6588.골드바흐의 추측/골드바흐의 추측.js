const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function sol(inputs) {
  
  inputs.pop();

  let res = '';
  for (const i of inputs) {
    let flag = false;

    for (let j = 2; j < i; j++) {
      if (isPrime(j) && isPrime(i - j)) {
        res += `${i} = ${j} + ${i - j}\n`;

        flag = true;
        break;
      }
    }

    if (!flag) {
      res += "Goldbach's conjecture is wrong.\n";
    }
  }

  return res.substring(0, res.length - 1);
};

function isPrime(num) {
    if (num <= 1) return false; // 1은 소수가 아니다
    if (num === 2) return true; // 2는 소수이다

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) return false; // num이 i로 나누어 떨어지면 i가 num의 약수가 되므로 소수가 아니다
    }
    return true;
}

console.log(sol(inputs));