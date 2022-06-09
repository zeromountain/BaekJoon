const fs = require('fs');
const [N, ...player] = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.split(' ').map(Number));

function sol (N, player) {
    let answer = 1000;
    for(let i = 0; i<(1<<N); i++){

      if(check(i)){
        let value = i
        const start = [];
        const link = [];
    
        for(let j = 0; j<N; j++){
          if(value&1){
            start.push(j)
          }else{
            link.push(j)
          }
          value = value>>1
        }

        const specStart = getSpec(start)
        const specLink = getSpec(link)

        const specDiff = Math.abs(specLink-specStart)
        if(specDiff<answer) answer = specDiff
      }
    }
    return answer;
}

function check(n){
  const target = Math.floor(N/2)
  let cnt = 0;
  while(n>0){
    if(n&1){
      cnt++;
    }
    n = n>>1;
  }
  if(cnt<=target)return true;
  return false;
}

function getSpec(arr){
  let spec = 0;
  for(let i = 0; i<arr.length; i++){
    const x = arr[i];
    for(let j= 0; j <arr.length; j++){
      if(i==j) continue;
      const y = arr[j]
      spec+=player[x][y]
    }
  }
  return spec
}

console.log(sol(N, player));