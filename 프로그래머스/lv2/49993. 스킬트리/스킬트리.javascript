function solution(skill, skill_trees) {
    let result = 0;
    for(const tree of skill_trees) {
        const check = Array.from(tree).filter(s => skill.includes(s)).map(s => skill.indexOf(s));
        if(checkOrder(check)) result += 1;
    }
    
    return result;
}

const checkOrder = (checkArr) => {
    for(let i = 0; i < checkArr.length; i += 1) {
        if(checkArr[i] !== i) return false
    }
    
    return true;
}