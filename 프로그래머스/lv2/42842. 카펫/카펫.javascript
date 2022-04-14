/*
1. 카페트의 총 면적은 brown + yellow
2. 카페트의 총 면적의 약수들을 구한다.
3. 약수들 중에서 두 약수의 합에 2를 곱하고 4를 뺀것이 brown과 같은 요소를 찾는다.
*/

function solution(brown, yellow) {
    const area = brown + yellow;
    console.log(getFactor(area).filter(factor => (factor[0] + factor[1]) * 2 - 4 == brown));
    return getFactor(area).filter(factor => (factor[0] + factor[1]) * 2 - 4 == brown)[0]
}

function getFactor(size) {
    const factor = [];
    for(let i = 1; i <= Math.sqrt(size); i++) {
        if(size % i == 0) factor.push([size/i, i]);
    }
    return factor;
}