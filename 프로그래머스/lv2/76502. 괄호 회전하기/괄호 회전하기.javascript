
function solution(s) {
    let answer = 0;
    let sArr = s.split('')
    if (isRight(sArr.join(''))) answer += 1
    for (let i = 0; i < sArr.length - 1; i++) {
        sArr.push(sArr.shift())
        if (isRight(sArr.join(''))) answer += 1
    }
    return answer;
}

function isRight(str) {
    const bracketOpen = ['[', '{', '('], bracketClose = [']', '}', ')']
    let status = [{open: false, openOrder: []}, {open: false, openOrder: []}, {open: false, openOrder: []}]
    for (let sIndex = 0; sIndex < str.length; sIndex++) {
        for (let bIndex = 0; bIndex < 3; bIndex++) {
            if (str[sIndex] === bracketOpen[bIndex]) {
                status[bIndex].open = true
                status[bIndex].openOrder.push(sIndex)
            }
            if (str[sIndex] === bracketClose[bIndex]) {
                if (status[bIndex].openOrder.length > 0) {
                    if (status.filter(check => check.open && check.openOrder[check.openOrder.length - 1] > status[bIndex].openOrder[status[bIndex].openOrder.length - 1]).length > 0)
                        return false 
                    status[bIndex].openOrder.pop()
                    status[bIndex].open = false
                } else {
                    return false 
                }
            }
        }
    }
    for (let i = 0; i < 3; i++) if (status[i].open) return false 
    return true
}