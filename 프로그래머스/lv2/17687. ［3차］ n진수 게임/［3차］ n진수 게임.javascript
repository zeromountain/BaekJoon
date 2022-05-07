function solution(n, t, m, p) {
    let q = [], result = [], currentNumDecimal = -1, turn = 0;
    while(result.length < t) {
        if(q.length == 0) {
            currentNumDecimal += 1;
            currentNumDecimal.toString(n).split('').forEach(digit => q.push(digit));
        }
        const currentChar = q.shift();
        if(turn % m === p - 1) result.push(currentChar);
        turn++
    }
    
    return result.join('').toUpperCase();
}