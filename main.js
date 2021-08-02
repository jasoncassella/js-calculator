function calc() {
	var num1 = parseInt(document.querySelector('#value1').value);
	var num2 = parseInt(document.querySelector('#value2').value);
	var operator = document.querySelector('#operator').value;
	var calculate;

	switch (operator) {
		case 'add':
			calculate = num1 + num2;
			break;
		case 'subtract':
			calculate = num1 - num2;
			break;
		case 'multiply':
			calculate = num1 * num2;
			break;
		case 'divide':
			calculate = num1 / num2;
			break;
		default:
			break;
	}

	document.querySelector('#result').innerHTML = calculate;
}

