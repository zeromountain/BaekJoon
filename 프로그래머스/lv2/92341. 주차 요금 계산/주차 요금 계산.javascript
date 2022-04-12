function solution(fees, records) {
    const result = [];
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const sortedRecords = records.map(el => el.split(' ')).sort((a, b) => {
        if(a[1] == b[1]) return a[0] - b[0]; // 차량 번호가 같은 경우 시간 순으로 정렬시킨다.
        return a[1] - b[1]; // 차량 번호가 같지 않은 경우는 차량 번호 순으로 정렬시킨다.
    })
    // console.log(sortedRecords, records)
    let previousTime = 0;
    let totalParkingTime = 0;
    
    while(sortedRecords.length) {
        let currentRecords = sortedRecords.shift(); // 첫번째 기록을 저장
        let time = currentRecords[0].split(':'); // 첫번째 기록의 시간을 : 을 기준으로 배열화
        let totalTime = Number(time[0]) * 60 + Number(time[1]); // 기록 시간을 분 단위로 변환
        
        if(sortedRecords.length && sortedRecords[0][1] == currentRecords[1]) {
            // sortedRecords에 요소가 존재하고 sortedRecords의 첫번째 요소의 차량번호가 currentRecords의 차량 번호와 같은 경우
            if (currentRecords[2] == 'IN') previousTime = totalTime; // currentRecords의 기록이 IN이면 previousTime을 totalTime으로 할당
            else {
                // OUT인 경우 
                let parkingTime = totalTime - previousTime; // 출차 시간에서 출입 시간을 빼서 주차 시간을 구한다.
                totalParkingTime += parkingTime; // 총 주차 시간을 구한다.
            }
        } else {
            // 번호가 다르거나 다음 주차 기록이 없는 경우
            if(currentRecords[2] == 'IN') {
                // 입차만 한 경우
                let parkingTime = 1439 - totalTime; // 23시 59분을 분단위로 바꾼 1439에서 출입시간을 빼서 주차 시간을 구한다.
                totalParkingTime += parkingTime; // 총 주차 시간을 구한다.
            } else {
                // 출차하는 경우
                let parkingTime = totalTime - previousTime;
                totalParkingTime += parkingTime;
            }
            if(totalParkingTime <= fees[0]) result.push(fees[1]); // 총 주차 시간이 기본 시간보다 작은 경우 기본 요금을 result 배열에 추가한다.
            else result.push(fees[1] + Math.ceil((totalParkingTime - fees[0]) / fees[2]) * fees[3]); // 총 요금을 계산해 result 배열에 추가한다.
            totalParkingTime = 0; // 초기화
        }
    }
    
    return result;
}