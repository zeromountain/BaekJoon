/*
1. n을 3진법으로 변환한다.
2. 3진법으로 변환한 숫자를 반전시킨다.
3. 반전시킨 숫자를 10진법으로 변환한다.
4. 10진법 숫자를 형변환한다.
*/

function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}