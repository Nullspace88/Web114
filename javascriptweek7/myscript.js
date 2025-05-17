// Brendan O'Connor 4/19/25

let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let answer = document.getElementById("answer");
let answer2 = document.getElementById("answer2");
let operation = document.getElementById("operator");
let button = document.getElementById("calc");

function calculate(num1, num2, oper) {
	let result;

	// demonstrating bullet point 1
	switch(oper){
		case "add":
			result = +num1 + +num2;
			break;
		case "subtract":
			result = +num1 - +num2;
			break;
		case "multiply":
			result = +num1 * +num2;
			break;
		case "divide":
			result = +num1 / +num2;
			break;
		case "exponent":
			result = (+num1) ** (+num2);
			break;
		case "modulo":
			result = (+num1) % (+num2);
			break;
	}
	answer.textContent = result;
}

button.addEventListener("click", ()=>{
	calculate(number1.value,number2.value,
		operation.value)})

console.log(number1);
// demonstrating bullet point 2
// true because truthy values are equal to one another
console.log(number1.value == +number1.value);
// false for strict equality because of type difference
console.log(number1.value === +number1.value);
// changing the value with the assignment operator
console.log(number1.value = 3);

//demonstrating bullet point 3
function calculate2(num1, num2) {
	//due to pemdas numbers added first, then exponent
	// is performed then division and finally adding 30
	result2 = (+num1+(+num2))**num2/4+30;
	answer2.textContent = result2;
}

button.addEventListener("click", ()=>{
	calculate2(number1.value, number2.value);
})

console.log(number2);
console.log(answer);
console.log(operation);
console.log(button);