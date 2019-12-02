const current_elem = document.getElementById("current");
const btns = document.getElementsByClassName("btn");
const result_elem = document.getElementById("result");
const score_elem = document.getElementById("score");
const price_elem = document.getElementById("price");

let last_number = 0;
let current_number = getRandomInt();
let score = 0;
var prices = [100,200,300,500,1000,1500,2000,3000,5000,10000];

current_elem.innerText = current_number;

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		PlayGame(this.dataset.value);
	});
}

function PlayGame (choice) {
	last_number = current_number;
	current_number = getRandomInt();
	current_elem.innerText = current_number;
	
	let comparison;
	
	if (last_number < current_number) {
		comparison = "higher";
	} else if (last_number > current_number) {
		comparison = "lower";
	} else {
		comparison = "match";
	}

	if (choice == comparison) {
		score++;
		
		for(n=0;n<score;n++){
			console.log(prices[score]);
			price_elem.innerHTML = `${prices[score]}`
			
			
			
		}
		score_elem.innerText = score;
		result_elem.innerText = "Correct";
		result_elem.classList.add("correct");
		result_elem.classList.remove("hide");

		setTimeout(function () {
			result_elem.classList.remove("correct");
			result_elem.classList.add("hide");
		}, 750);
	} else if (comparison == "match") {
		result_elem.innerText = "Match";
		result_elem.classList.remove("hide");

		setTimeout(function () {
			result_elem.classList.add("hide");
		}, 750);
	} else {
		result_elem.innerText = "Incorrect";
		result_elem.classList.add("incorrect");
		result_elem.classList.remove("hide");

		score = 0;
		score_elem.innerText = score;

		setTimeout(function () {
			result_elem.classList.remove("incorrect");
			result_elem.classList.add("hide");
		}, 750);
	}
	
}


function getRandomInt () {
	return Math.floor((Math.random() * 50));
}