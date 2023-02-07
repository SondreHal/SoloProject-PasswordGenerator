const characters = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?';

const passwordOne = document.getElementById('pw_1');
const passwordTwo = document.getElementById('pw_2');
const passwordThree = document.getElementById('pw_3');
const passwordFour = document.getElementById('pw_4');

function generatePassword() {
	const numberInput = document.getElementById('numberInput');

	let generatedPasswordOne = '';
	let generatedPasswordTwo = '';
	let generatedPasswordThree = '';
	let generatedPasswordFour = '';

	// TO AVOID CRAZY INPUTS
	if (numberInput.value < 15 || numberInput.value > 20) return;

	for (let i = 0; i < numberInput.value; i++) {
		generatedPasswordOne += characters.charAt(Math.floor(Math.random() * characters.length));
		generatedPasswordTwo += characters.charAt(Math.floor(Math.random() * characters.length));
		generatedPasswordThree += characters.charAt(Math.floor(Math.random() * characters.length));
		generatedPasswordFour += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	passwordOne.textContent = generatedPasswordOne;
	passwordTwo.textContent = generatedPasswordTwo;
	passwordThree.textContent = generatedPasswordThree;
	passwordFour.textContent = generatedPasswordFour;
}

const copyPassword = (password, num) => {
	const test = password.textContent;

	if (test !== 'Copied!' && test !== 'Password ' + num) {
		navigator.clipboard.writeText(test);

		password.textContent = 'Copied!';

		setTimeout(function () {
			password.textContent = test;
		}, 800);
	}
};
