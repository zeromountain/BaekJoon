/*
TODO: priorities 배열에서 location 번째 요소가 몇번째로 인쇄되는지 반환

1. 인쇄 카운트 변수 생성하고 0으로 할당
2. priorities 배열의 첫번째 요소가 최대값인지 확인 
    2-1. 최대값이면 priorities 배열에서 소거하고 인쇄 카운트 1증가 
        --> 
    2-2. 최대값이 아니면 배열에서 shift하고 배열의 마지막에 push 인쇄 카운트는 유지
3. priorities 배열의 요소가 존재하지 않을때까지 반복
*/

function solution(priorities, location) {
    let printCount = 0;
    while(true) {
        if(priorities[0] < Math.max(...priorities)) {
            if(--location < 0) location = priorities.length - 1;
            priorities.push(priorities.shift());
        } else {
            printCount++;
            if(--location < 0) return printCount
            priorities.shift();
        }
    }
}