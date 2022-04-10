function solution(absolutes, signs) {
    return absolutes
        .map((absolute, idx) => signs[idx] ? absolute : -absolute)
        .reduce((prev, curr) => prev + curr, 0);
}