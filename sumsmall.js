function sumTwoSmallestNumbers(numbers) {  
    min1=Math.min.apply(null, numbers)
    n= numbers.splice(numbers.indexOf(min1), 1)
    min2=Math.min.apply(null, numbers)
return min1+min2}