/*
1. lottos 배열에서 win_nums 배열의 요소와 일치하는 요소의 개수를 확인한다.
2. lottos 배열에서 0인 요소의 개수를 확인한다.
3. 최소 등수는 1번의 개수
4. 최대 등수는 1번의 개수 + 2번의 개수
*/

function solution(lottos, win_nums) {
    const correctCount = lottos.filter((lotto) => win_nums.includes(lotto)).length;
    const zeroCount = lottos.filter((lotto) => lotto == 0).length;
    // 1: 6개, 2: 5개, 3: 4개, 4: 3개, 5: 2개, 6: 1이하
    const minPrize = 7 - correctCount >= 6 ? 6 : 7 - correctCount;
    const maxPrize = minPrize - zeroCount < 1 ? 1 : minPrize - zeroCount; 
    
    return [maxPrize, minPrize];
}