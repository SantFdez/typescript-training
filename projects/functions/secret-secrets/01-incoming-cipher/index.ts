// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.
export type Cipher = (character: string) => string;

export function createCipher(cipher: Cipher) {
	return (text: string) => {
		let result = "";

		for (let character of text) {
			result += cipher(character);
		}

		return result;
	};
}
