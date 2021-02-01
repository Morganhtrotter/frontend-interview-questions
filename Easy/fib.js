function fib(a) {
	if (a == 0) {
  	return 0;
  } else if (a == 1) {
  	return 1
  } else {
  	return fib(a - 1) + fib(a - 2);
  }
}


console.log(fib(0));
console.log(fib(1));
console.log(fib(10));
console.log(fib(20));
console.log(fib(5));