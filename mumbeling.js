function accum(s) {
	array=s.split("");
    array3=[];
    l=array.length;
    for (let i = 0 ; i<l ; i++){
        array2=[];
        for ( let j = 0 ; j<=i ; j++) {
            array2.push(array[i]) ;
        }
        array2[0] = array2[0].toUpperCase();
        array3.push(array2)
        array3.push('-')
    } 
    array3.pop()
    s=array3.toString();
    s=s.replaceAll(",","");

return s
} 
console.log(accum("abcdefg"));