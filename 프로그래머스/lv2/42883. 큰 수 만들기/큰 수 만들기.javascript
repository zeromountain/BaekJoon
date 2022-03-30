function solution(number, k) {
    let stack = [];
    
    for(let i = 0; i < number.length; i++) {
        while(stack.length !== 0 && stack[stack.length - 1] < number[i]) {
            stack.pop();
            
            if(--k === 0) {
                return stack.join("") + number.substr(i, number.length - i)
            }
        }
        
        stack.push(number[i])
    }
    
    return stack.join("").substr(0, stack.length - k)
}