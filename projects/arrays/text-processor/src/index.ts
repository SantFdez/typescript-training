// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.

export type Text = {
	align?: "left" | "middle" | "right";
	width: number;
};

export function makeLines(text: string, width: number) {
	let words = text.split(" ");

	const lines: string[] = [];
	let line = "";

	for (const word of words) {
		if (line === "") {
			line = word;
		} else if (line.length + word.length < width) {
			line += ` ${word}`;
		} else {
			lines.push(line);
			line = word;
		}
	}

	lines.push(line);
	return lines;
}

export function addSpaces(lines: string[], { align = "left", width }: Text) {
	const aligned: string[] = [];

	for (const line of lines) {
		const remainingSpaces = width - line.length;
		let newLine = line;

		if (remainingSpaces) {
			switch (align) {
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
	return aligned;
}

export function alignTexts(texts: string[], options: Text) {
	const response: string[][] = [];

	for (const text of texts) {
		const lines = makeLines(text, options.width);
		const aligned = addSpaces(lines, options);
		response.push(aligned);
	}

	return response;
}
