// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

const checkEmotion = async function (knownEmotions, emotion) {
	// Simulate database processing time by waiting a second...
	await new Promise((resolve) => {
		return setTimeout(resolve, 1000);
	});

	return knownEmotions.has(emotion);
};

const speak = async function (knownEmotions, newEmotion, phrase) {
	try {
		if (!(await checkEmotion(knownEmotions, newEmotion))) {
			throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
		}
		return `"${phrase}" (${newEmotion})`;
	} catch (error) {
		throw error;
	}
};

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
