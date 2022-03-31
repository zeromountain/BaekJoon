function solution(answers) {
  let soopo1=[1, 2, 3, 4, 5];
  let soopo2=[2, 1, 2, 3, 2, 4, 2, 5];
  let soopo3=[3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count=[0, 0, 0];
  
  for(let i = 0; i<answers.length; i++){
    if(soopo1[i % soopo1.length] === answers[i]){
        count[0]++;
    };

    if(soopo2[i % soopo2.length] === answers[i]){
        count[1]++;
    };

    if(soopo3[i % soopo3.length] === answers[i]){
        count[2]++;
    };
  };

  let max = Math.max(...count);
    let result=[];
    for(let j = 0; j < count.length; j++){
      if(count[j] === max){
        result.push(j+1);
      };
    };

  return result;
};