function filter(a, b) {
	var temp = []
	for (var i = 0; i < a.length; i++) {
  	if (b(a[i])) {
    	temp.push(a[i]);
    }
  }
  return temp;

}

console.log(filter([1, 2, 3, 4], n => n < 3));
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], n => n < 5));