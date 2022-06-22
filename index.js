const characters =
	"abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?";

const generateButton = document.getElementById("generate-btn");

const passwordOne = document.getElementById("password1");
const passwordTwo = document.getElementById("password2");
const passwordThree = document.getElementById("password3");
const passwordFour = document.getElementById("password4");

passwordLength.blur();
document.addEventListener("click", () => {
	passwordLength.blur();
});

generateButton.addEventListener("click", () => {
	const passwordLength = document.getElementById("passwordLength");

	function update() {
		console.log(passwordLength.value);
	}

	update();

	let generatePasswordOne = "";
	let generatePasswordTwo = "";
	let generatePasswordThree = "";
	let generatePasswordFour = "";

	if (passwordLength.value < 6 || passwordLength.value > 18) return;

	for (let i = 0; i < passwordLength.value; i++) {
		generatePasswordOne += characters.charAt(
			Math.floor(Math.random() * characters.length)
		);
		generatePasswordTwo += characters.charAt(
			Math.floor(Math.random() * characters.length)
		);
		generatePasswordThree += characters.charAt(
			Math.floor(Math.random() * characters.length)
		);
		generatePasswordFour += characters.charAt(
			Math.floor(Math.random() * characters.length)
		);
	}
	passwordOne.innerHTML = generatePasswordOne;
	passwordTwo.innerHTML = generatePasswordTwo;
	passwordThree.innerHTML = generatePasswordThree;
	passwordFour.innerHTML = generatePasswordFour;
});

passwordOne.addEventListener("click", () => {
	let currentPasswordOne = passwordOne.textContent;

	if (currentPasswordOne !== "Copied!") {
		if (currentPasswordOne !== "Password 1") {
			navigator.clipboard.writeText(passwordOne.textContent);

			passwordOne.textContent = "Copied!";

			setTimeout(function () {
				passwordOne.textContent = currentPasswordOne;
			}, 1000);
		}
	}
});

passwordTwo.addEventListener("click", () => {
	let currentPasswordTwo = passwordTwo.textContent;

	if (currentPasswordTwo !== "Copied!") {
		if (currentPasswordTwo !== "Password 2") {
			navigator.clipboard.writeText(passwordTwo.textContent);

			passwordTwo.textContent = "Copied!";

			setTimeout(function () {
				passwordTwo.textContent = currentPasswordTwo;
			}, 1000);
		}
	}
});

passwordThree.addEventListener("click", () => {
	let currentPasswordThree = passwordThree.textContent;

	if (currentPasswordThree !== "Copied!") {
		if (currentPasswordThree !== "Password 3") {
			navigator.clipboard.writeText(passwordThree.textContent);

			passwordThree.textContent = "Copied!";

			setTimeout(function () {
				passwordThree.textContent = currentPasswordThree;
			}, 1000);
		}
	}
});

passwordFour.addEventListener("click", () => {
	let currentPasswordFour = passwordFour.textContent;

	if (currentPasswordFour !== "Copied!") {
		if (currentPasswordFour !== "Password 4") {
			navigator.clipboard.writeText(passwordFour.textContent);

			passwordFour.textContent = "Copied!";

			setTimeout(function () {
				passwordFour.textContent = currentPasswordFour;
			}, 1000);
		}
	}
});
