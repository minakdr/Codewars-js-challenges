function SeriesSum(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += 1 / (3 * i - 2);
    }
    return result.toFixed(2);
}
// https://www.codewars.com/kata/555eded1ad94b00403000071
