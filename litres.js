function century(year) {
    return year%10===0 ?  year/100: Math.trunc(year/100) + 1 }