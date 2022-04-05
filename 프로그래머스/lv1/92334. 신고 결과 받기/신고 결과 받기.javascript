/*
1. id_list의 유저 정보를 통해 유저에 대한 신고 정보를 저장하는 객체를 만든다. (report_list)
2. report_list의 유저가 신고당한 정보(배열)의 길이가 k 이상이면 정지 회원 조건을 만족한다.

** 동일한 유저에 대한 신고는 1회로 간주 **
*/

function solution(id_list, report, k) {
    const res = Array.from({length: id_list.length}, () => 0);
    const report_list = {};
    
    id_list.map((user) => {
        report_list[user] = []; // report_list에 사용자 이름을 키로 빈 배열을 값으로 프로퍼티 추가
    });
    
    report.map((user) => {
        const [user_id, report_id] = user.split(' ');
        if(!report_list[report_id].includes(user_id)){ // report_list의 사용자의(?) 배열에 동일한 신고자가 없으면 신고자를 추가
            report_list[report_id].push(user_id)
        }        
    });

    for(const key in report_list){
        if(report_list[key].length >= k){ // 신고자 리스트의 길이가 2개 이상인 경우 배열 요소로 id_list에서 인덱스를 찾아 res 배열에 해당 인덱스의 값을 업데이트
            report_list[key].map((user) => {
                res[id_list.indexOf(user)] += 1
            })
        }
    }
    return res;
}