function lookAndSaySequence(firstElement, n) {

    for (let i = 1; i < n; i++) {
        let nextElement = [];
        let count = 1;

        for (let j = 1; j <= firstElement.length; j++) {
            if (j < firstElement.length && firstElement[j] === firstElement[j - 1]) {
                count++; 
            } else {
  
                nextElement.push(count)
                nextElement.push(firstElement[j - 1])
                count = 1
            }
        }

        firstElement = nextElement.join('')
    }

    return firstElement; 
}
