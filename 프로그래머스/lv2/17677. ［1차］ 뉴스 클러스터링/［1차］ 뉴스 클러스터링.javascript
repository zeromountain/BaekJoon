function solution(str1, str2) {
    let result = 0;
    let compareOne = verifiedSlices(str1), compareTwo = verifiedSlices(str2);
    const set = new Set([...compareOne, ...compareTwo])
    let multiIntersectionLength = 0, multiSetLength = 0;
    for(const slice of set) {
        const compareOneCount = compareOne.filter(x => x === slice).length,
              compareTwoCount = compareTwo.filter(x => x === slice).length;
        multiIntersectionLength += Math.min(compareOneCount, compareTwoCount);
        multiSetLength += Math.max(compareOneCount, compareTwoCount);
    }
    
    result = multiSetLength === 0 ? 65536 : Math.floor(multiIntersectionLength / multiSetLength * 65536);
    return result;
}

const verifiedSlices = (str) => {
    const onlyAlphabet = /[a-zA-Z]{2}/;
    const result = [];
    for(let i = 0; i < str.length - 1; i++) {
        const slice = str.slice(i, i + 2);
        if(onlyAlphabet.test(slice)) result.push(slice.toLowerCase());
    }
    return result;
}