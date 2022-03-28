function solution(citations) {
    let answer = 0;
    citations.sort((x,y) => y - x)
    
    while(answer + 1 <= citations[answer]) answer++;
    
    return answer
}