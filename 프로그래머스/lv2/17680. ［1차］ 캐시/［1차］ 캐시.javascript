function solution(cacheSize, cities) {
    let result = 0;
    let cache = [];
    
    if(cacheSize == 0) return 5 * cities.length;
    
    while(cities.length > 0) {
        
        const city = cities.shift().toLowerCase();
        
        if(cache.includes(city)) {
            cache.splice(cache.indexOf(city), 1);
            
            cache.push(city);
            
            result += 1;
        } else {
            if(cache.length == cacheSize) cache.shift();
            cache.push(city);
            result += 5;
        }
    }
    
    return result;
}