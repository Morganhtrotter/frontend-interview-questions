function isSorted(a) {
	if (a.length == 0 || a.length == 1) {
  	return true;
  } else {
  	for (var i = 0; i < a.length - 1; i++) {
    	if (a[i] >  a[i + 1]) {
      	return false;
      }
    }
    return true;
  }
}

console.log(isSorted([]));
console.log(isSorted([1, 2]));
console.log(isSorted([2, 1]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([-5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, -10]));