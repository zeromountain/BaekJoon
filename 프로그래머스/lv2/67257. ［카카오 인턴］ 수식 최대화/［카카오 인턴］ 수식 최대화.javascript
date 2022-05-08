function solution(expression) {
    const calc = ['*', '+', '-'];
    let priorityArr = Permutation(calc, 3);
    const calculated = [];
    
    for(const priority of priorityArr) {
        const expressionArr = expression.split(/(\D)/);
        
        for(const exp of priority) {
            while(expressionArr.includes(exp)) {
                const index = expressionArr.indexOf(exp);
                expressionArr.splice(index - 1, 3, eval(expressionArr.slice(index - 1, index + 2).join('')))
            }
        }
        calculated.push(Math.abs(expressionArr[0]));
    }
    
    return Math.max(...calculated);
}

function Permutation (arr, r) {
    const result = [];
    if(r === 1) return arr.map((num) => [num]);
    
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
        const permutation = Permutation(rest, r - 1);
        const attached = permutation.map((numbers) => [fixed, ...numbers]);
        result.push(...attached);
    })
    
    return result;
}