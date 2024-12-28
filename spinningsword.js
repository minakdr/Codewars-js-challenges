function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}



function spinWords(string){
  string=string.split(' ')
  for(let i=0 ; i<string.length ; i++)
    if (string[i].length >= 5){
      string[i]=reverseString(string[i]) }
  console.log(string)
   return string.join(' ');
}


