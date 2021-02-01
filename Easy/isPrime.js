function isPrime(a) {
	if (a == 0 || a == 1 || a == 2) {
  	return false;
  } else {
  	for (var i = 2; i <= a / 2; i++) {
    	if (a % i == 0) {
      	return false;
      }
    }
    return true;
  }
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(17));
console.log(isPrime(100000000));