const amount = 100;
const numbers = [];

for (let i = 1; i <= amount; i++) {
    numbers.push(i);
}

const sumOfSquares = numbers.map((n) => n * n).reduce((sum, n) => sum + n, 0);
const squareOfSums = Math.pow(numbers.reduce((sum, n) => sum + n, 0), 2);

console.log(squareOfSums - sumOfSquares);
