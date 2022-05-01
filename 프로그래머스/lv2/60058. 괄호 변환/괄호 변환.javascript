function solution(p) {
    if (p.length === 0) return p // 1
    let bracketCount = 0
    let isURight = true
    for (let i = 0; i < p.length; i++) { 
        bracketCount = p[i] === '(' ? bracketCount + 1 : bracketCount - 1
        if (bracketCount < 0) isURight = false
        if (bracketCount === 0) {
            const [u, v] = [p.slice(0, i + 1), p.slice(i + 1)] // 2
            if (isURight) { // 3
                return u + solution(v)
            } else { // 4
                let emptyString = '(' + solution(v) + ')' // 4-1 ~ 4-3
                const slicedReversedString = u // 4-4
                    .slice(1, u.length - 1)
                    .split('')
                    .map(bracket => bracket === '(' ? ')' : '(')
                    .join('')
                return emptyString + slicedReversedString // 4-5
            }
        }
    }
}