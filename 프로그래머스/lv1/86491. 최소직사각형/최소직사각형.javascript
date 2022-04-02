/*
🤔 가로와 세로가 바뀔 수 있다.
🤔 모든 명함을 보관할 수 있는 최대 가로, 최대 세로 길이를 찾아야 한다.

1. sizes 배열 요소의 가로 세로 길이를 비교해 (가로 < 세로 )라면 변경해준다.
2. 최대 길이를 보관할 변수를 생성한다. (초기값: [0, 0])
3. 가로 세로 길이를 변경한 배열을 순회하며 가로의 최대값과 세로의 최대값을 찾아 최대 길이 보관 배열에 저장한다.
4. 최대 길이 배열의 요소를 모두 곱해 너비를 계산한다.
*/

function solution(sizes) {
    const rotatedSizes = sizes.map(([width, height]) => width < height ? [height, width] : [width,height]);
    const maxSizes = [0, 0];
    rotatedSizes.forEach(([width, height]) => {
        if(width > maxSizes[0]) maxSizes[0] = width;
        if(height > maxSizes[1]) maxSizes[1] = height;
    })
    return maxSizes[0] * maxSizes[1];
}