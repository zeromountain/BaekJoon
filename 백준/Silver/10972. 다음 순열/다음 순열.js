const fs = require('fs');
const [N, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

function sol (n, arr) {
    const copiedArr = [...arr].sort((a, b) => b - a);
    if(arr.every((value, index) => value === copiedArr[index])){
        console.log(-1);
    } else {
        let i = n - 2;
        while(arr[i] > arr[i+1]) {
            i--;
        }
        let j = n - 1;
        while(arr[i] > arr[j]) {
            j--;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
        console.log([...arr.slice(0, i+1), ...arr.slice(i+1).sort((a,b) => a - b)].join(' '));
    }
}

sol(N, arr);