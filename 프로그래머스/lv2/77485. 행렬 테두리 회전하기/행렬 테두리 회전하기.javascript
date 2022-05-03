function solution(rows, columns, queries) {
    const result = [];
    let matrix = Array.from({length: rows}, (_, i) => Array.from({length: columns}, (_, j) => i * columns + j + 1));
    
    for(const query of queries) {
        const order = [];
        const [row1, col1, row2, col2] = [query[0] - 1, query[1] - 1, query[2] - 1, query[3] - 1];
        
        for(let i = row1; i <= row2; i++) order.push(matrix[i][col1]);
        for(let i = col1 + 1; i <= col2; i++) order.push(matrix[row2][i]);
        for(let i = row2 - 1; i >= row1; i--) order.push(matrix[i][col2]);
        for(let i = col2 - 1; i > col1; i--) order.push(matrix[row1][i]);
        
        order.push(order.shift());
        result.push(Math.min(...order));
        
        for(let i = row1; i <= row2; i++) matrix[i][col1] = order.shift();
        for(let i = col1 + 1; i <= col2; i++) matrix[row2][i] = order.shift();
        for(let i = row2 - 1; i >= row1; i--) matrix[i][col2] = order.shift();
        for(let i = col2 - 1; i > col1; i--) matrix[row1][i] = order.shift();
    }
    return result;
}