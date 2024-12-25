function solution(number){
  s=0
  for ( let i = 0 ; i<number ; i++){
    if (i %5===0 ||i %3===0){
      s=s+i
    }
  } return s 
}