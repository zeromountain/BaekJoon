const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
      
const solution = (input) => {
    let [T, ...data] = input

    let res = '';

    for (let i = 0; i < T; i++) {
        const [M, N, x, y] = data[i];

        let year = x;
        let yNum = 0;

        const maxYear = LCM(M, N);

        while (true) {
            yNum = year % N === 0 ? N : year % N;

            if (yNum === y) break;
            if (year > maxYear) break;
            year += M;
        }

        year > maxYear ? (res += `${-1}\n`) : (res += `${year}\n`);
    }
    return res;
};

const GCD = (a, b) => (b ? GCD(b, a % b) : a);
const LCM = (a, b) => (a * b) / GCD(a, b);

console.log(solution(input));
