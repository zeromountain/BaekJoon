const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.split(' ').map(Number));
const [N,M] = input[0]
const board = input.splice(1)

function check1(i,j){
  if(j+3<M){
    return board[i][j]+board[i][j+1]+board[i][j+2]+board[i][j+3]  
  }
    return 0;
}

function check2(i,j){
  if(i+3<N){
    return board[i][j]+board[i+1][j]+board[i+2][j]+board[i+3][j]  
  }
    return 0;
}

function check3(i,j){
  if(i+1<N && j+1<M){
    return board[i][j]+board[i+1][j]+board[i][j+1]+board[i+1][j+1]  
  }
  return 0;
}

function check4(i,j){
  if(i+2<N && j+1<M){
    return board[i][j]+board[i+1][j]+board[i+2][j]+board[i+2][j+1]  
  }
  return 0;
}

function check5(i,j){
  if(i+1<N && j+2<M){
    return board[i][j]+board[i+1][j]+board[i][j+1]+board[i][j+2]  
  }
  return 0;
}

function check6(i,j){
  if(i+2<N && j+1<M){
    return board[i][j]+board[i][j+1]+board[i+1][j+1]+board[i+2][j+1]  
  }
  return 0;
}

function check7(i,j){
  if(i+1<N && j+2<M){
    return board[i][j+2]+board[i+1][j]+board[i+1][j+1]+board[i+1][j+2]  
  }
  return 0;
}

function check8(i,j){
  if(i+2<N && j+1<M){
    return board[i][j]+board[i+1][j]+board[i+1][j+1]+board[i+2][j+1]  
  }
  return 0;
}

function check9(i,j){
  if(i+1<N && j+2<M){
    return board[i+1][j]+board[i+1][j+1]+board[i][j+1]+board[i][j+2]  
  }
  return 0;
}

function check10(i,j){
  if(i+1<N && j+2<M){
    return board[i][j]+board[i][j+1]+board[i][j+2]+board[i+1][j+1]  
  }
  return 0;
}

function check11(i,j){
  if(i+2<N && j+1<M){
    return board[i][j+1]+board[i+1][j]+board[i+1][j+1]+board[i+2][j+1]  
  }
  return 0;
}

function check12(i,j){
  if(i+2<N && j+1<M){
    return board[i][j]+board[i+1][j]+board[i+2][j]+board[i+1][j+1]  
  }
  return 0;
}

function check13(i,j){
  if(i+1<N && j+2<M){
    return board[i][j+1]+board[i+1][j]+board[i+1][j+1]+board[i+1][j+2]  
  }
  return 0;
}

function check14(i,j){
  if(i+2<N && j+1<M){
    return board[i][j+1]+board[i+1][j+1]+board[i+2][j]+board[i+2][j+1]  
  }
  return 0;
}

function check15(i,j){
  if(i+1<N && j+2<M){
    return board[i][j]+board[i][j+1]+board[i][j+2]+board[i+1][j+2]  
  }
  return 0;
}

function check16(i,j){
  if(i+2<N && j+1<M){
    return board[i][j]+board[i][j+1]+board[i+1][j]+board[i+2][j]  
  }
  return 0;
}

function check17(i,j){
  if(i+1<N && j+2<M){
    return board[i][j]+board[i+1][j]+board[i+1][j+1]+board[i+1][j+2]  
  }
  return 0;
}

function check18(i,j){
  if(i+2<N && j+1<M){
    return board[i][j+1]+board[i+1][j]+board[i+1][j+1]+board[i+2][j]  
  }
  return 0;
}

function check19(i,j){
  if(i+1<N && j+2<M){
    return board[i][j]+board[i][j+1]+board[i+1][j+1]+board[i+1][j+2]  
  }
  return 0;
}


let max = 0;
for(let i = 0; i<N; i++){
  for(let j = 0; j<M; j++){
    max = Math.max( max,
                    check1(i,j),
                    check2(i,j),
                    check3(i,j),
                    check4(i,j),
                    check5(i,j),
                    check6(i,j),
                    check7(i,j),
                    check8(i,j),
                    check9(i,j),
                    check10(i,j),
                    check11(i,j),
                    check12(i,j),
                    check13(i,j),
                    check14(i,j),
                    check15(i,j),
                    check16(i,j),
                    check17(i,j),
                    check18(i,j),
                    check19(i,j)
                    )

  }
}
console.log(max)