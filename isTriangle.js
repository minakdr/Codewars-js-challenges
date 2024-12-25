function isTriangle(a,b,c){ 
    if( a<0 || b<0 || c<0) {return false } else {
    let p = (a + b + c) /2
    let A = Math.sqrt (p*(p-a)*(p-b)*(p-c))
    return A > 0 ? true : false }}