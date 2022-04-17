function solution(word) {
    const collection = {
        A: 0,
        E: 1, 
        I: 2,
        O: 3,
        U: 4
    }
    const range = [781, 156, 31, 6, 1];
    
    return word.split("").reduce((acc, cur, idx) => acc + collection[cur] * range[idx] + 1, 0);
}