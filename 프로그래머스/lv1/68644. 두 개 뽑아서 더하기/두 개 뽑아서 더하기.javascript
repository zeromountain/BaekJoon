/*
n개의 요소 중 2개를 선택하는 경우 (조합)
1. 배열의 길이 개수의 원소 중에서 2개를 뽑아 더한다.
2. 새로운 배열 요소에 중복은 없다.
3. 배열은 오름차순 정렬이다.

** number의 길이가 100 이하이므로 시간복잡도는 넉넉하다 **
*/

const selected = [];
const result = [];

function combination(count, numbers, index) {
    if(count === 2) {
        return result.push(selected.reduce((prev, curr) => prev + curr))
    }
    for(let i = index; i < numbers.length; i += 1) {
        selected.push(numbers[i]);
        combination(count + 1, numbers, i + 1);
        selected.pop();
    }
}

function solution(numbers) {
    combination(0, numbers, 0);
    return [...new Set(result)].sort((a, b) => a - b);
    
}