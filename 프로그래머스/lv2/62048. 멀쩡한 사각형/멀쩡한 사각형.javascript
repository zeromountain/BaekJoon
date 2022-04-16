function solution(w, h) {
    return w * h - (w + h - helper(w, h));
}

const helper = (w, h) =>{
    let temp;
    while(h > 0) {
        temp = w % h;
        w = h;
        h = temp
    }
    return w;
}