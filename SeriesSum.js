// https://www.codewars.com/kata/555eded1ad94b00403000071
function SeriesSum(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += 1 / (3 * i - 2);
    }
    return result.toFixed(2);
}

/* 
Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).
Serie = 1+1/4+1/7+1/10.....

You need to round the answer to 2 decimal places and return it as String.
If the given value is 0 then it should return "0.00".
You will only be given Natural Numbers as arguments.

Examples (Input --> Output)
n
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


*/
