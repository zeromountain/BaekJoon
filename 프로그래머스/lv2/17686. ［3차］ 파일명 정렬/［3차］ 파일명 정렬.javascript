function solution(files) {
    let result = [];
    const numRegex = /[0-9]+/;
    
    result = files.sort((a, b) => {
        const [matchA, matchB] = [a.match(numRegex), b.match(numRegex)];
        const [headA, headB] = [a.slice(0, matchA.index).toLowerCase(), b.slice(0, matchB.index).toLowerCase()];
        const [numA, numB] = [parseInt(matchA[0]), parseInt(matchB[0])];
        
        if(headA < headB) return -1;
        else if(headA > headB) return 1
        else if(numA < numB) return -1
        else if(numA > numB) return 1
        else return 0
    })
    
    return result;
}