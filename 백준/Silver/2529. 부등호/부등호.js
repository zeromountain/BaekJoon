const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');
const N = +input[0]
const inequality  = input[1].split(' ')


const answer = [];

function check(str,cnt){
  if(cnt==N){
    answer.push(str);
    return;
  }else{
    const last = str[cnt];
    if(inequality[cnt]=='>'){
      for(let i = 0; i<10; i++){
        if(!str.includes(`${i}`) && last>i){
           check(str+`${i}`,cnt+1)
        }
      }
    }else{
      for(let i = 0; i<10; i++){
        if(!str.includes(`${i}`) && last<i){
           check(str+`${i}`,cnt+1)
        }
      }
    }
  }
}


for(let i = 0; i<10; i++){
  check(`${i}`,0);
}

console.log(answer.pop()+'\n'+answer.shift())