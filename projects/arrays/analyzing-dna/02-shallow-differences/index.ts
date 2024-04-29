// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.
export function shallowDifferences(a: string[], b: string[]) {
	if (a.length != b.length) {
		return undefined;
	}
	let response: string[] | undefined[] = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] == b[i]) {
			response[i] = a[i];
		} else {
			response[i] = undefined;
		}
	}
	return response;
}
