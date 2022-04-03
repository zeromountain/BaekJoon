/*
1. 문자열을 space(" ") 기준으로 배열로 나눈다.
2. 배열의 요소를 순회하며 요소의 첫번째 문자를 대문자로 나머지 문자를 소문자로 변경한다.
    2-1. 요소의 첫번째 문자를 찾아(String.prototype.charAt) 대문자로 변경한다.
    2-2. 요소의 첫번째 요소를 제외하고(String.prototype.substring) 소문자로 변경한다.
3. 변경된 배열의 요소를 space(" ") 기준으로 문자열로 변환한다.
*/

function solution(s) {
  return s
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(' ');
}
