// Write your shallowEquality function here! ✨
// You'll need to export it so the tests can run it.
export function shallowEquality(a: string[], b: string[]) {
	const json1 = JSON.stringify(a);
	const json2 = JSON.stringify(b);

	return json1 === json2;
}
