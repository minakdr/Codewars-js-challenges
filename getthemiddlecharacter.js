function getMiddle(s) {
    let array=s.split("") ;
    let m = Math.trunc(array.length / 2)
    if (array.length%2 === 0) {
       return array[m-1] + array[m]
    } else {return array[m]}
  }

console.log(getMiddle("helloo"));
