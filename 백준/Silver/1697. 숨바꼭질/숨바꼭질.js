const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const sol = (N, K) => {
    const visit = Array.from({length: 100100}, () => 0);
    
    const q = [];
    q.push([N, 0]);
    visit[N] = 1;
    while(q.length) {
        const [curr, time] = q.shift();
        if(curr === K) return time;
        for(next of [curr-1, curr+1, curr*2]) {
            if(!visit[next] && next >= 0 && next <= 100000) {
                visit[next] = 1;
                q.push([next, time+1]);
            }
        }
    }
}

console.log(sol(N, K));