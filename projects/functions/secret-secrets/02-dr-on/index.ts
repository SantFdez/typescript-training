// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.
export type OnVowel = (character: string) => string;
export type OnConsonant = (character: string) => string;
export type OnPunctuation = (character: string) => string;

export function createAdvancedCipher(
	onVowel: OnVowel,
	onConsonant: OnConsonant,
	onPunctuation: OnPunctuation
) {
	return (text: string) => {
		let result = "";
		let regexVowel = new RegExp("[aeiou]", "i");
		let regexConsonant = new RegExp("[bcdfghjklmnpqrstvwxyz]", "i");

		for (let character of text) {
			if (regexVowel.test(character)) {
				result += onVowel(character);
			} else if (regexConsonant.test(character)) {
				result += onConsonant(character);
			} else {
				result += onPunctuation(character);
			}
		}

		return result;
	};
}
