const amount = 1001;
const primes = [2];
let n = 3;

while (primes.length !== amount){
    let isPrime = true;

    for(let i = 0; i < primes.length; i++ ){
        if(n % primes[i] === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        primes.push(n);
    }

    n += 2;
}

console.log(primes.pop());
