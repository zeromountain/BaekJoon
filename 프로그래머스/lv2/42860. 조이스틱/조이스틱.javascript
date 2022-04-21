/*
A-Z까지의 알파벳에서 특정 요소 알파벳의 인덱스 위치와 A-Z까지의 알파벳 길이에서 인덱스를 뺀 값 중에서 최소값으로 움직인다.
*/

function solution(name) {
    let result = 0;
    const length = name.length;
    let upDownCount = 0
    let leftRightCountList = [length - 1]
    
    for (let i = 0; i < length; i++) upDownCount += minUpOrDownCount(name[i])
    
    for (let startOfA = 0; startOfA < name.length; startOfA++) {
        let endOfA = startOfA + 1;
        while (endOfA < length && name[endOfA] === 'A') endOfA++;
        const [moveToStartOfA, moveToEndOfA] = [startOfA, length - endOfA]
        leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA)
        leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA)
    }
    result = upDownCount + Math.min(...leftRightCountList)
    return result;
}

function minUpOrDownCount(destination) {
    const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const index = Alphabet.indexOf(destination)
    return Math.min(index, Alphabet.length - index)
}