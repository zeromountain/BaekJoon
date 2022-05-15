const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.split(' ').map(Number));
const [N,M,K] = input[0]
let board = input.splice(1)

let answer ;

for(let i = 0; i<N; i++){
  for(let j = 0; j<M; j++){
    board[i][j]  ={
      row:i,
      column:j,
      value:board[i][j],
    }
  }
}


function sequence(arr){
  const L = arr.length
  if(L==K){
    const sum = arr.map(v=>v.value).reduce((r,v)=>{return r+v},0)
    if(answer==null) answer = sum;
    if(sum>answer)answer = sum;
    return;
  }else{
    let n =0;
    let m = 0;
    if(L>0){
      const last = arr[L-1];
      n =  last.row;
      m = last.column;
    }
    
    for(let i = n; i<N; i++){
      for(let j = m;j<M; j++){
        if(check(arr,board[i][j])){
          arr.push(board[i][j]);
          sequence(arr)
          arr.pop()
        }
      }
      m=0;
    }

  }
  return
}

function check(arr,next){
  const {row,column} = next;
  for(let i = 0; i<arr.length; i++){
      if(row==arr[i].row && column ==arr[i].column ) return false;
      if(row==arr[i].row && column ==arr[i].column-1 ) return false;
      if(row==arr[i].row && column ==arr[i].column+1 ) return false;
      if(row==arr[i].row+1 && column ==arr[i].column ) return false;
      if(row==arr[i].row-1 && column ==arr[i].column ) return false;
  }
  return true;
}


sequence([],0);


console.log(answer)