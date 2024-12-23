function XO(str) {
str=str.toLowerCase()
array=str.split('')
l=array.length
let cx = 0 ;
let co = 0 ; 
for ( let i = 0; i<l ; i++){
    if (array[i] == 'x') {cx++}
    else if (array[i]=='o'){co++}
}

console.log(co)
console.log(cx)
if (co==cx) { return true}
else { return false }

}

console.log(XO("ooxx"));