const fs = require('fs');

const [N, K] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

function sol (n, k) {
    const path = Array.from({length: 100100}, () => 0);
    const visit = Array.from({length: 100100}, () => 0);
    
    function bfs(n) {
        const q = [];
        q.push([n, 0]);
        while(q.length) {
            const [cur, time] = q.shift();
            if(cur === k) return time;
            for(next of [cur-1, cur+1, cur*2]) {
                if(!visit[next] && next >= 0 && next <= 100000) {
                    path[next] = cur;
                    visit[next] = 1;
                    q.push([next, time+1]);
                }
            }
        }
    }
    
    const time = bfs(n);
    const order = [];
    order.push(k);
    let prev = path[k];
    
    for(let i = 0; i < time; i++) {
        order.push(prev);
        prev = path[prev];
    }
    
    const result = `${time}\n${order.reverse().join(' ')}`
    return result;
}

console.log(sol(N, K));