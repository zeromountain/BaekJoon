// function solution(participant, completion) {
//     participant.sort();
//     completion.sort();
//     for(let i = 0; i < participant.length; i += 1) {
//         if(participant[i] !== completion[i]) return participant[i];
//     }
// }

const solution = (participant, completion) => {
    const hash = {};
    for(let person of participant) {
        hash[person] = hash[person] ? hash[person] + 1 : 1;
    }
    
    for(let person of completion) {
        hash[person] = hash[person] ? hash[person] + 1 : 1;
    }
    
    for(let [key, value] of Object.entries(hash)) {
        if(value % 2 != 0) return key;
    }
}












/*
particapant에서 completion에 있는 요소들을 빼고 시퍼
*/