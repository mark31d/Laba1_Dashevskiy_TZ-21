
function first()
{let value = 5;
if(value == Number(value)){
if(value % 2 == 0){
    console.log("Число " + value +" парне.");
}
else{
    console.log("Число " + value +" не  парне.");

}
}
else{
 
  console.log("");
}
}
console.log(first());
//_____________________________________________
function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1 && num !== 0;
  }
  
  function FivePrimes() {
    let primes = [];
    let num = 2;
    while (primes.length < 5) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
  }
  console.log(FivePrimes());
//_____________________________________________
function sum(n) {
  let sum = 0;
  let num = 0;
  let series = ""; 
  for (let i = 1; i <= n; i++) {
      num = num * 10 + 1;
      sum += num;
      series += num;
      if (i !== n) {
          series += " + ";
      }
  }
  console.log(series);
  return sum;
}

console.log(sum(5)); 
