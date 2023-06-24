const fibonacci = function(fibonacciIndex) {
    if (fibonacciIndex < 0) return "OOPS"
    const fibPart = [0, 1];
	for (let index = 1; index < fibonacciIndex; index++) {
		fibPart.push(fibPart[index] + fibPart[index -1]);
	}
	return fibPart[fibonacciIndex];
};

// Do not edit below this line
module.exports = fibonacci;
