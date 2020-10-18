 
module.exports = function toReadable (number) {
    
	const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const dozensTens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', ''];
	const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const hundreds = '';
	const thousands = '';
	const millions = '';

	let resultReadNumber = [];

	if (number === 0) return 'zero';
/*
	switch (true) {

		case (number % 1000000 === 0): 
			number = number / 1000000;
			if (number === 1) resultReadNumber.unshift('million');
			else resultReadNumber.unshift('millions');
			break;
		case (number % 1000 === 0): 
			number = number / 1000;
			if (number === 1) resultReadNumber.unshift('thousand');
			else resultReadNumber.unshift('thousands');
			break;
		default:
			break;
	}
*/
	let readNumber = number.toString().split('').reverse();

	for (let i = 0; i < readNumber.length; i++) {
		switch (true) {
			case (i === 0): 
				resultReadNumber.unshift(units[readNumber[i]]);
				break;
			case (i === 1 || i === 4 || i === 7): 
				if (readNumber[i] === '1') {
					resultReadNumber.shift();
					resultReadNumber.unshift(dozensTens[readNumber[i - 1]]);
				}
				else resultReadNumber.unshift(dozens[readNumber[i]]);
				break;	
			case (i === 2 || i === 5):
				resultReadNumber.unshift('hundred');
				resultReadNumber.unshift(units[readNumber[i]]);
				break;
			case (i === 3): if (readNumber[i] === '1') resultReadNumber.unshift('thousand');
				else resultReadNumber.unshift('thousands');
				resultReadNumber.unshift(units[readNumber[i]]);
				break;
			case (i === 6):
				if (readNumber[i] === '1') resultReadNumber.unshift('million');
				else resultReadNumber.unshift('millions');
				resultReadNumber.unshift(units[readNumber[i]]);
				break;	

			default:
				break;
		}
	}
	
	resultReadNumber = resultReadNumber.filter(function(e) {return e});
	console.log(resultReadNumber);
	return resultReadNumber.join(' ');
}

