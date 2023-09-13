// Run the code here, no problems?

function getPriceWithTax(amount, rate) {
	const price = amount.toFixed(2)
	const tax = price * rate
	return (price + tax)
}

const answer = getPriceWithTax(23.99, 9.5)
console.log(answer)

// Run the code here and look at the results
// Does it look right? 
// What went wrong?

/*
The toFixed(2) method will convert the amount into a string with two decimal places.
When you calculate the tax using price * rate, you're actually multiplying a string with a number.
Similarly, when you do price + tax, it's trying to concatenate a string (price) with a number (tax).
If we move the toFixed(2) to the end of the function, it will work as expected.
*/

function getCorrectPriceWithTax(amount, rate) {
	const price = amount
	const tax = price * rate
	return (price + tax).toFixed(2)
}

const correctAnswer = getCorrectPriceWithTax(23.99, 9.5)
console.log(`Correct Answer: ${correctAnswer}`)