/*
1. arr의 요소들을 이진수로 변환한다.
2. 이진수로 치환된 요소에 대해 합연산은 한다.
3. 합연산된 요소를 공백과 #으로 이루어진 문자열로 치환한다.
*/

function solution(n, arr1, arr2) {
    return arr1.map((a,i)=>(a|arr2[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
}