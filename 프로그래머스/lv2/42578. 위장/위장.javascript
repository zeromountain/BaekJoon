function solution(clothes) {
    const species = {};
    
    for(let key of clothes) {
        !species[key[1]] ? species[key[1]] = 1 : species[key[1]]++;
    }
    
    const cases = Object.values(species);

    if(cases.length == 1) {
        return cases[0];
    }
    
    const caseOfNumber = cases.reduce((acc, curr) => {
        return acc * (curr + 1);
    }, 1);
    
    return caseOfNumber - 1; 
}

/*
1. 의상 종류를 파악해라.
    - 같은 의상 종류는 입을 수 없다.
        - 같은 의상의 종류가 3 종류라면, 해당 의상 종류는 3가지 경우로 생각한다
2. 다른 의상 종류와 조합 => 의상 수 1 ~ 30
    - 1가지 의상 종류 조합
    - 2가지 의상 종류 조합
    - 3가지 의상 종류 조합
    - 4가지 의상 종류 조합
{
    face: [crowmask, bluesunglasses, smokey_makeup],
}
*/