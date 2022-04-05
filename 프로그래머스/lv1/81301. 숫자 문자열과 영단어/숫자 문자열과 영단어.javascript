/*
1. s에 대해 정규표현식을 사용해 0부터 9까지 숫자로 변환한다.
2. 변환된 s를 숫자로 형변환한다.
*/

function solution(s) {
    const words = [[/zero/g, 0], [/one/g, 1], [/two/g, 2], [/three/g, 3], [/four/g, 4], [/five/g, 5], [/six/g, 6], [/seven/g, 7], [/eight/g, 8], [/nine/g, 9]];
    words.forEach(word => {
        s = s.replace(word[0], word[1]);
    })
    return +s;
}