function solution(arr) {
    return (arr.reduce((acc, curr) => acc + curr, 0)) / arr.length;
}