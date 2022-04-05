/*
1. budget을 넘지 않는 d 요소에서 개수를 구한다.
*/

function solution(d, budget) {
    let sum = 0;
    let count = 0;
    d.sort((a, b) => a - b);
    
    for(let i = 0; i < d.length; i += 1) {
        sum += d[i];
        count += 1;
        if(sum > budget) count -= 1;
    }
    return count;
}