/*
1. 0부터 9까지의 합을 구한다
2. numbers 배열 요소의 모든 합을 구한다
3. 0부터 9까지의 합에서 number 배열 요소의 합을 뺀다.
*/

function solution(numbers) {
    const numbersSum = numbers.reduce((acc, cur) => acc + cur, 0);
    return 45 - numbersSum;
}