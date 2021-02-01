function reverse(a) {
	var temp = '';
  if (a == '') {
  	return a;
  } else {
  	for (var i = a.length; i >= 0; i--) {
    	temp += a.charAt(i);
    }
    return temp;
  }
}

console.log(reverse(''));
console.log(reverse('abcdef'));