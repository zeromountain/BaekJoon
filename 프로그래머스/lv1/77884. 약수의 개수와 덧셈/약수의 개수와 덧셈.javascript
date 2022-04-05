/*
1. left와 right 범위의 숫자에 대한 약수를 구한다.
2. 약수의 개수가 짝수면 더 하고 홀수면 뺀다.
*/

function solution(left, right) {
    let res = 0;
    let count = 0;
    for(let i = left; i <= right; i += 1) {
        for(let j = 1; j <= i; j += 1) {
            if(i % j == 0) {
                // j로 i를 나눈 나머지가 0이라면 i는 j의 약수이다.
                count += 1;
            }
        }
        // count가 짝수인지 홀수인지 확인
        if(count % 2 == 0) res += i; // count가 짝수면 i를 더한다
        if(count % 2 != 0) res -= i; // count가 짝수가 아니면 i를 뺀다
        count = 0; // 하나의 수에 대한 약수 탐색이 종료되면 count 초기화
    }
    return res;
}