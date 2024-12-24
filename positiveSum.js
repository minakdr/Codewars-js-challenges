function positiveSum(arr) {
let s=0;
for (let i=0 ; i<arr.length ; i++ ) {
if( arr[i]>0 ) {s=s+arr[i]}}
return s}

console.log(positiveSum([1,2,3,-4,5]));