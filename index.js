const characters = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?';

const passwordOne = document.getElementById('pw_1');
const passwordTwo = document.getElementById('pw_2');
const passwordThree = document.getElementById('pw_3');
const passwordFour = document.getElementById('pw_4');

const generatePassword = () => {
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
	passwordOne.innerHTML = generatedPasswordOne;
	passwordTwo.innerHTML = generatedPasswordTwo;
	passwordThree.innerHTML = generatedPasswordThree;
	passwordFour.innerHTML = generatedPasswordFour;
};

const copyPassword = (currentPassword, uniquePassword) => {
	let currentPassword = uniquePassword.textContent;

	if (currentPassword !== 'Copied!') {
		if (currentPassword !== 'Password 1') {
			navigator.clipboard.writeText(uniquePassword.textContent);

			uniquePassword.textContent = 'Copied!';

			setTimeout(function () {
				uniquePassword.textContent = currentPassword;
			}, 1000);
		}
	}
};
