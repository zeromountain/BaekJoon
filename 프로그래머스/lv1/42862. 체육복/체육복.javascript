/*
1. 체육복을 잃어버린 학생들 중에서 여분이 있는 학생 필터 -> 잃어버리고 여분이 없는 학생
2. 여분이 있는 학생 중에서 잃어버린 학생 필터 -> 여분이 있고 잃어버리지 않은 학생
3. 위의 두 그룹을 비교해 빌려 줄 수 있는 번호의 차이인지 확인
*/
function solution(n, lost, reserve) {
    let filteredLost = lost.filter((student) => !reserve.includes(student));
    let filteredReserve = reserve.filter((student) => !lost.includes(student));
    let count = n - filteredLost.length; // 수업이 가능한 인원
    
    const info = {}; // 빌려줄 수 있는 학생의 정보
    for(let i = 0; i < filteredReserve.length; i++) {
        info[filteredReserve[i]] = true
    }
    
    filteredLost = filteredLost.sort((x, y) => x- y);
    for(let i = 0; i < filteredLost.length; i++) {
        if(info[filteredLost[i] - 1]) { // 바로 앞 번호의 학생에게 빌릴 수 있다
            count++; // 수업이 가능한 인원 +1
            info[filteredLost[i] - 1] = false; // 체육복을 빌려준 학생은 체육복을 빌려준 상태로 바꾼다
        }else if(info[filteredLost[i] + 1]) { // 바로 뒷 번호의 학생에게 빌릴 수 있다
            count++; // 수업이 가능한 인원 +1
            info[filteredLost[i] + 1] = false; // 체육복을 빌려준 학생은 체육복을 빌려준 상태로 바꾼다
        }
    }    

    return count;
}