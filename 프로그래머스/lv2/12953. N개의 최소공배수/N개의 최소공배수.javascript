function solution(arr) {
    let answer = 1;
    for(let i = 0; i < arr.length; i++) {
        answer = LCM(answer, arr[i])
    }
    return answer;
}

function GCD(num1, num2) { 
    if(num2 == 0) return num1;
    
    return GCD(num2, num1 % num2);
}

function LCM(num1, num2) {
    return (num1 * num2) / GCD(num1, num2)
}