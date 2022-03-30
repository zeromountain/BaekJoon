function solution(dartResult) {
    let answer = 0;
    let score = 0;
    let arr = [];
    
    for(let i = 0; i < dartResult.length; i ++) {
        if(!isNaN(dartResult[i])) {
            // 10에대한 예외처리
            // i번째 요소의 앞 요소가 1이면, 두자리의 숫자는 10만 올 수 있기 때문에
            // i번째 요소는 0이 된다
            score = Number(dartResult[i-1]) === 1 ? 10 : Number(dartResult[i]);
        } else if (dartResult[i] === "S") {
            arr.push(score);
        } else if(dartResult[i] === "D") {
            arr.push(Math.pow(score, 2));
        } else if(dartResult[i] === "T") {
            arr.push(Math.pow(score, 3));
        } else if(dartResult[i] === "*") {
            arr[arr.length - 2] = arr[arr.length - 2] * 2;
            arr[arr.length - 1] = arr[arr.length - 1] * 2;
        } else if(dartResult[i] === "#") {
            arr[arr.length - 1] = -1 * arr[arr.length - 1];
        }
    }
    
    answer = arr.reduce((acc, curr) => acc + curr, 0);
    return answer;
}
// 문자열에서 점수와 보너스 옵션을 구분
// 숫자 => 점수
// 보너스 => s,d,t
// 옵션 => *, # 



/*
보너스
s => 1제곱
d => 2제곱
t => 3제곱

옵션
* => 2배
# => 마이너스
*/