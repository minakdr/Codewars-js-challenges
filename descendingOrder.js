function descendingOrder(n){
    n=n.toString().split('')
    n=n.sort(function(a, b){return b-a});
    console.log(n)
     n=n.toString()
      console.log(n)
     n=n.replaceAll("'", "")
     n=n.replaceAll(",", "")
      console.log(n)
     n=parseInt(n)
      console.log(n)
    return  n 
}    