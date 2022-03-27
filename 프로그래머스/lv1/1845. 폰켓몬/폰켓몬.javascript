function solution(nums) {    
    const stack = [];

    for(let i = 0, len = nums.length; i < len; i++) {        
        if(!stack.includes(nums[i]) && stack.length < nums.length/2) {
            stack.push(nums[i]);                
        }
    }

    return stack.length;
}