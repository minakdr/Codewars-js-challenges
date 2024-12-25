// function found online 
function isUpperCase (input) {  
    return input === String(input).toUpperCase()
  }
  
  var capitals = function (word) {
      let arr=[]
    for (let i =0 ; i<word.length ; i++){
      if (isUpperCase(word[i])) {
      arr.push(i)
      }
    }
    return arr 
  };