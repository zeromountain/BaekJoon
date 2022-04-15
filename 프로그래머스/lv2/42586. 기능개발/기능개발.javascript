function solution(progresses, speeds) {
    const result = [];
    let q = [];
    
    for(let i = 0; i < speeds.length; i += 1) {
        let task = Math.ceil((100 - progresses[i]) / speeds[i]);
        q.push(task);
        
        if(task > q[0]) {
            result.push(q.length - 1);
            q = [task];
        }
    }
    
    result.push(q.length);
    return result;
}