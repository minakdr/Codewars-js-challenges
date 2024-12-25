function removeSmallest(numbers) {
    numbers.splice(numbers.indexOf(Math.min.apply(null, numbers)), 1);
   return numbers
 }