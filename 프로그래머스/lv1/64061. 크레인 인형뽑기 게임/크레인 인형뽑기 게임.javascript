function solution(board, moves) {
    let res = 0;
    const length = board.length
    let basket = []
    moves.forEach(pick => {
        for (let i = 0; i < length; i++) {
            const item = board[i][pick - 1]
            if (item !== 0) {
                if (basket[basket.length - 1] !== item) {
                    basket.push(item)
                } else {
                    basket.pop()
                    res += 2
                }
                board[i][pick - 1] = 0
                break
            }
        }
    })

    return res;
}