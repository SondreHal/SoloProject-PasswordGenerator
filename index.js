const characters =
	"abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?";

const generateButton = document.getElementById("generate-btn");

const PasswordOne = document.getElementById("password1");
const PasswordTwo = document.getElementById("password2");
const PasswordThree = document.getElementById("password3");
const PasswordFour = document.getElementById("password4");

const PasswordLength = document.getElementById("passwordLength");
passwordLength.value = 10;

PasswordLength.focus();
document.addEventListener("click", () => {
	passwordLength.focus();
});

generateButton.addEventListener("click", () => {
	let generatePasswordOne = "";
	let generatePasswordTwo = "";
	let generatePasswordThree = "";
	let generatePasswordFour = "";

	for (let i = 0; i < PasswordLength.value; i++) {
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
	PasswordOne.innerHTML = generatePasswordOne;
	PasswordTwo.innerHTML = generatePasswordTwo;
	PasswordThree.innerHTML = generatePasswordThree;
	PasswordFour.innerHTML = generatePasswordFour;
});

PasswordOne.addEventListener("click", () => {
	let currentPasswordOne = PasswordOne.textContent;

	if (currentPasswordOne !== "Copied!") {
		if (currentPasswordOne !== "Password 1") {
			navigator.clipboard.writeText(PasswordOne.textContent);

			PasswordOne.textContent = "Copied!";

			setTimeout(function () {
				PasswordOne.textContent = currentPasswordOne;
			}, 1000);
		}
	}
});

PasswordTwo.addEventListener("click", () => {
	let currentPasswordTwo = PasswordTwo.textContent;

	if (currentPasswordTwo !== "Copied!") {
		if (currentPasswordTwo !== "Password 2") {
			navigator.clipboard.writeText(PasswordTwo.textContent);

			PasswordTwo.textContent = "Copied!";

			setTimeout(function () {
				PasswordTwo.textContent = currentPasswordTwo;
			}, 1000);
		}
	}
});

PasswordThree.addEventListener("click", () => {
	let currentPasswordThree = PasswordThree.textContent;

	if (currentPasswordThree !== "Copied!") {
		if (currentPasswordThree !== "Password 3") {
			navigator.clipboard.writeText(PasswordThree.textContent);

			PasswordThree.textContent = "Copied!";

			setTimeout(function () {
				PasswordThree.textContent = currentPasswordThree;
			}, 1000);
		}
	}
});

PasswordFour.addEventListener("click", () => {
	let currentPasswordFour = PasswordFour.textContent;

	if (currentPasswordFour !== "Copied!") {
		if (currentPasswordFour !== "Password 4") {
			navigator.clipboard.writeText(PasswordFour.textContent);

			PasswordFour.textContent = "Copied!";

			setTimeout(function () {
				PasswordFour.textContent = currentPasswordFour;
			}, 1000);
		}
	}
});
