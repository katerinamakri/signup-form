var form = document.getElementById('form');
var inputsElements = document.getElementsByTagName('input');


form.addEventListener('submit', test());

function test(event) {
	console.log(event)
	console.log(inputsElements{'0'}.value)
}