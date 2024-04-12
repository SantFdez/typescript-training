// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.
export type Cracker = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

export function createCodeCracker(cracker: Cracker) {
	return (text: string) => {
		for (let i = 0; i < cracker.attempts; i += 1) {
			const guess = cracker.makeGuess(text, i);
			if (cracker.validateGuess(guess)) {
				return guess;
			}
		}
		return undefined;
	};
}

// Which is the difference?

// export function createCodeCracker({
// 	attempts,
// 	makeGuess,
// 	validateGuess,
// }: Cracker) {
// 	return (text: string) => {
// 		for (let i = 0; i < attempts; i += 1) {
// 			const guess = makeGuess(text, i);
// 			if (validateGuess(guess)) {
// 				return guess;
// 			}
// 		}
// 		return undefined;
// 	};
// }
