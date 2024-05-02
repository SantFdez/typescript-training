// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.

export type Text = {
	align?: "left" | "middle" | "right";
	width: number;
};

export function alignTexts(texts: string[], options: Text) {
	const response: string[][] = [];

	for (const text of texts) {
		let words = text.split(" ");

		const lines: string[] = [];
		let line = "";

		for (const word of words) {
			if (line === "") {
				line = word;
			} else if (line.length + word.length < options.width) {
				line += ` ${word}`;
			} else {
				lines.push(line);
				line = word;
			}
		}

		lines.push(line);

		const aligned: string[] = [];

		for (const line of lines) {
			const remainingSpaces = options.width - line.length;
			let newLine = line;

			if (remainingSpaces) {
				!options.align ? (options.align = "left") : options.align;
				switch (options.align) {
					case "left":
						for (let i = 0; i < remainingSpaces; i += 1) {
							newLine += " ";
						}
						break;

					case "middle":
						for (let i = 0; i < Math.ceil(remainingSpaces / 2); i += 1) {
							newLine += " ";
						}

						for (let i = 0; i < Math.floor(remainingSpaces / 2); i += 1) {
							newLine = " " + newLine;
						}

						break;

					case "right":
						for (let i = 0; i < remainingSpaces; i += 1) {
							newLine = " " + newLine;
						}
						break;
				}
			}

			aligned.push(newLine);
		}
		response.push(aligned);
	}

	return response;
}
