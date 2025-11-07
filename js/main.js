
document.addEventListener('DOMContentLoaded', init);

const log = console.log;

function init() {
	// load after DOMContentLoaded
	const body = document.querySelector('body');
	body.addEventListener('click', bodyClickHandler);
}

function bodyClickHandler(ev) {
	// log(randomNum(0xffffff,0x000000).toString(16));
	randomNum(1,0) ? setColor() : setString() ;
}

function randomNum(max=10, min=1) {
	return Math.floor(Math.random()*(max - min + 1) + min);
}

function randomColor() {
	let randomColorStr = randomNum(0xffffff,0x000000).toString(16).padStart(6, '0');
	// if (randomColorStr.length < 6) {
	// 	randomColorStr = '0'.repeat(6-randomColorStr.length) + randomColorStr;
	// }
	return "#"+randomColorStr;
}

function randomStr() {
	const strArr = ["hello", "morning", "good night"];
	return strArr[randomNum(strArr.length - 1, 0)];
}

function setColor() {
	// log("fun1");
	return new Promise((resolve, reject) => {
		setTimeout(resolve(randomColor()), randomNum(2000, 1000));
	}).then(color=>{
		const body = document.querySelector('body');
		body.setAttribute("style", `background-color: ${color}`);
		// log(color);
	});
}

function setString() {
	// the main will have more and more sting in it
	// we can reset the content to each time have a single one
	return new Promise((resolve, reject) => {
		setTimeout(resolve(randomStr()), randomNum(2000, 1000));
	}).then(str=>{
		const main = document.querySelector('main');
		const p = document.createElement('p');
		p.innerText = str;
		main.append(p); 
	});
}

