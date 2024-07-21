document.addEventListener("DOMContentLoaded", function () {
	let mac = document.querySelector("#mac");
	let macolon = document.querySelector("#macolon");
	let copyBtn = document.querySelector("#copy");

	/**
	 * addColons returns a string with colons added every two characters.
	 */
	function addColons(inputString) {
		let formattedString = "";
		for (let i = 0; i < inputString.length; i += 2) {
			if (i > 0) {
				formattedString += ":";
			}
			formattedString += inputString.substr(i, 2);
		}
		return formattedString;
	}

	function inputHandler(event) {
		let inputString = event.target.value;
		let formattedString = addColons(inputString);
		macolon.value = formattedString;
	}

	async function clipboard() {
		let type = "text/plain";
		let blob = new Blob([macolon.value], { type });
		let data = [new ClipboardItem({ [type]: blob })];
		await navigator.clipboard.write(data);
	}

	mac.addEventListener("input", inputHandler);
	copyBtn.addEventListener("click", clipboard);
});
