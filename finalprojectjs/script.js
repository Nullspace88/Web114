// Brendan O'Connor 5/7/2025

"use strict"; // use strict requirement

let userName; // let requirement
let userScore = 0;

document.getElementById("tron").click();

document.addEventListener("DOMContentLoaded", function(event) { // addEventListener requirement
	alert("You have now entered the game"); // alert requirement
	do {
		userName = prompt("Please enter your game username (1 point):","Player1"); // prompt requirement
		console.log(userName)
		userScore++; // ++ requirement
	} while (!userName) // while loop requirement

	let names = document.getElementsByClassName("name");
	console.log(names);
	for (let name of names) {
		name.textContent = userName;
		console.log(name);
	}
})

document.getElementById("tron").addEventListener("click", function(event) {
	console.log("click tron radio");
	let img = document.querySelector("img");
	console.log(img);
	img = img.setAttribute("src", "tron.png");
	img = document.querySelector("img");
	img = img.setAttribute("alt", "a picture of a tron motorcycle performing a wheelie");
	userScore++; // ++ requirement
});

document.getElementById("funny").addEventListener("click", function(event) {
	console.log("click funny radio");
	let img = document.querySelector("img");
	console.log(img);
	img = img.setAttribute("src", "funny.png");
	img = document.querySelector("img");
	img = img.setAttribute("alt", "a humorous picture of a dog in a tie");
	userScore++; // ++ requirement
});

let images = document.querySelectorAll("img"); // querySelectorAll requirement
console.log(images);
for (let img of images) { // for requirement
	img.addEventListener("click", () => toggleThumbnail(img)); // use javascript to modify imnages requirement
}

function toggleThumbnail(img) { // custom function requirement
	console.log(img.style.width); // console log to debug requirement
	if (!img.style.width || (parseInt(img.style.width) == 100)) { // || requirement
		img.style.width = 20+"%" // + as a concatenate
		userScore++; // ++ requirement
		return;
	};

	if(parseInt(img.style.width) <= 20) { // <= logical operator
		console.log(img.style.width); // console log to debug requirement
		img.style.width = 100+"%";
		userScore--; // -- requirement
		return;
	}
}

let accbutton = document.getElementById("pressacc");

accbutton.addEventListener("click", function(event) {
	let answer = document.getElementById("answer");
	let ansval = +answer.textContent; //getElementById.textContent requirement
	console.log(ansval); // console log to debug requirement
	ansval += 1 // += requirement
	answer.textContent = ansval;
	userScore++; // ++ requirement
})

const reservedWords = ["abstract", "break", "char", "debugger",
						"double", "export", "finally", "goto",
						"in", "let", "null", "public", "super",
						"throw", "try", "volatile", "arguments",
						"byte", "class", "default", "else", "extends",
						"float", "if", "instanceof", "long", "package",
						"return", "switch", "throws", "typeof", "while",
						"await", "case", "const", "delete", "enum", "false",
						"for", "implements", "int", "native", "private", "short",
						"synchronized", "transient", "var", "with", "boolean",
						"catch", "continue", "do", "eval", "final", "import",
						"interface", "new", "protected", "static", "this",
						"true", "void", "yield"] // const and arry requirements

let checkbutton = document.getElementsByTagName("button")[1]; // getElementsByTagName requirement
console.log(checkbutton) // console.log for debugging requirement
let textbox = document.getElementById("wordQuery");

checkbutton.addEventListener("click", function(event) {
	let text = textbox.value // document.getElementById("something2").value requirement
	isReservedWord(text);
	userScore++; // ++ requirement
})

function isReservedWord (word) {
	if (reservedWords.includes(word)) {
		console.log("word is reserved"); // console.log for debugging requirement
		textbox.classList.add("confirm"); // document.getElementById("something5").classList requirement
	} else { // if ... else requirement
		textbox.classList.add("cancel")
	}
}

textbox.addEventListener("keypress", function(event){
	if (event.key == "Enter") {
		console.log("Enter pressed");
		checkbutton.click();
	}
})

textbox.addEventListener("input", function(event){
	textbox.className = ""; // document.getElementById("something4").className requirement
})

let firstNumber = document.getElementById("num1");
let secondNumber = document.getElementById("num2");
let operator = document.getElementById("operator");


let calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function(event){
	calculate(+firstNumber.value, +secondNumber.value, 
		operator.value);
	userScore++;
});


function calculate(num1, num2, operator) {
	let calculation = document.getElementById("calculation");
	switch(operator) { // switch operator requirement
		case "+": // + requirement
			calculation.textContent = num1 + num2; // contrast usage of + sign for addition
			break;				
		case "-": // - requirement
			calculation.textContent = num1 - num2;
			break;				
		case "/": // / requirement
			calculation.textContent = num1 / num2;
			break;				
		case "*": // * requirement
			calculation.textContent = num1 * num2;
			break;
		case "%": // % requirement
			calculation.textContent = num1 % num2;
			break;
		case "**": // ** requirement
			calculation.textContent = num1 ** num2;
			break;
		case "<": // < requirement
			calculation.textContent = num1 < num2;
			break;
		case ">": // > requirement
			calculation.textContent = num1 > num2;
			break;
		case ">=": // >= requirement
			calculation.textContent = num1 >= num2;
			break;
		case "<=": // <= requirement
			calculation.textContent = num1 <= num2;
			break;
		case "==": // == requirement
			calculation.textContent = num1 == num2;
			break;
		case "===": // == requirement
			calculation.textContent = num1 === num2;
			break;
		case "!=": // != requirement
			calculation.textContent = num1 != num2;
			break;
		case "!==": // !== requirement
			calculation.textContent = num1 !== num2;
			break;
				
	}
}

let scoreCalc = document.getElementById("scorecalc");
scoreCalc.addEventListener("click", function(event) {
	let score = document.getElementById("score");
	score.textContent = userScore;
});

// use &&
