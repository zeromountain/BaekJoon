function solution(arr1, arr2) {
    var answer = [];
    
    for(let e = 0; e < arr1.length; e++) {
        answer.push([]);
    }
    
    for(let i = 0; i < arr1.length; i ++) {
        for(let j = 0; j < arr1[0].length; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    
    return answer;
}