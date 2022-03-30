function solution(price, money, count) {
    var answer = -1;
    var sum = 0;
    for(let i = 1; i <= count; i++) {
        sum += i * price 
    }

    return answer = sum > money ? sum - money : 0;
}