// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.
export function deepDifferences(a: string[][], b: string[][]) {
	if (a.length !== b.length) {
		return undefined;
	}

	const response: ((string | undefined)[] | undefined)[] = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			response[i] = undefined;
		} else {
			const subResponse: (string | undefined)[] = [];

			for (let j = 0; j < a[i].length; j++) {
				if (a[i][j] === b[i][j]) {
					subResponse[j] = a[i][j];
				} else {
					subResponse[j] = undefined;
				}
			}
			response[i] = subResponse;
		}
	}

	return response;
}
