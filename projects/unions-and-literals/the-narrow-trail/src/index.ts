export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let availableResource: "Food" | "Water" | undefined;
	// let day: number = 1;
	let food: number = 5;
	let water: number = 5;

	for (let day = 1; day <= 7; day++) {
		const rolldice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
		let action: "Food" | "Water" | number;

		if (rolldice == 1) {
			action = "Food";
		} else if (rolldice == 2) {
			action = "Water";
		} else {
			action = rolldice;
		}

		if (typeof action === "number") {
			if (availableResource == "Food") {
				food += action;
				availableResource = undefined;
			} else if (availableResource == "Water") {
				water += action;
				availableResource = undefined;
			} else {
				availableResource = rolldice % 2 === 0 ? "Food" : "Water";
			}
		} else {
			availableResource = action;
		}

		food -= 1;
		water -= 1;

		if (food == 0 || water == 0) {
			return false;
		}
	}

	return true;
}
