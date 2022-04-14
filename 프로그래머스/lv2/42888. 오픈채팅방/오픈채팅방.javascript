function solution(record) {
    const result = [];
    const user = {};
    
    for(let i = 0; i < record.length; i += 1) {
        // console.log(record[i].split(' '));
        const [act, uid, name] = record[i].split(' ');
        
        if(act == 'Leave') {
            result.push([uid, '님이 나갔습니다.']);
            continue;
        }
        if(act == 'Enter') {
            result.push([uid, '님이 들어왔습니다.']);
        }
        user[uid] = name;
    }
    // console.log(user);
    
    return result.map(info => user[info[0]] + info[1]);
}