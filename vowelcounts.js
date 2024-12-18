function getCount(str) {
    let total = 0;
    let array = str.split("");
    console.log(array);
    for ( let i = 0 ; i < array.length; i++) {
      switch (str[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          total++; // Increment total directly
      } }
     return total ;
    }

  console.log(getCount('helloworlds'));