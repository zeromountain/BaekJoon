/*
그리디 원리(?)
몸무게 순으로 정렬해서 가장 작은 몸무게와 가장 큰 몸무게를 더한 값을 limit와 비교
*/



function solution(people, limit) {
  let cnt = 0;
  
  people.sort((a, b) => {return a - b}) // 몸무게 순으로 오름차순 정렬

  while(people.length != 0){ 
      // people 배열이 빌때까지 실행
      if (people[0] + people[people.length-1] <= limit){ 
          // 첫번째 사람과 마지막 사람의 몸무게 합이 limit보다 작거나 같은 경우 첫 사람과 마지막 사람 제외
          people.pop()
          people.shift()
      } else {
          // 마지막 사람 제외
          people.pop()
      }
      cnt++;
  }
  return cnt;
} 