const primes = [2, 3, 5, 7, 11, 13, 17, 19];
const nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20];

let result = 20;

function validateArray(number, array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (number % array[i] !== 0) {
            return false;
        }
    }
    return true;
}

while (true) {
    if (validateArray(result, primes) && validateArray(result, nonPrimes)) break;
    result += 20;
}
console.log(result);