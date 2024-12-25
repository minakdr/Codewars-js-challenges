function digitize(n) {
    n=n.toString()
    n=n.split('')
    console.log(n)
    let m =[]
    for (let i = n.length-1 ; i>=0 ; i--){
      console.log(n[i])
      m.push(Number(n[i]))}
    return m}