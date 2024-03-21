// // Write your Bird type here! ✨
// class Bird {
// 	dangerous: boolean;
// 	diet: string;
// 	name: string;
// 	noisy: boolean;
// 	inteligent: boolean;

// 	constructor(dangerous:boolean, diet:string, name:string, noisy:boolean, inteligent:boolean){
// 		this.dangerous = dangerous;
// 		this.diet = diet;
// 		this.name = name;
// 		this.noisy = noisy;
// 		this.inteligent = inteligent;
// 	}
// }

export type Bird = {
	dangerous?: boolean;
	diet: "carnivore" | "omnivore";
	intelligent?: boolean;
	name: string;
	noisy?: boolean;
};

export const birds: Bird[] = [
	{
		dangerous: true,
		diet: "omnivore",
		name: "White-Throated Magpie-Jay",
		noisy: true,
	},
	{
		diet: "omnivore",
		intelligent: true,
		name: "Eurasian Magpie",
	},
	{
		diet: "carnivore",
		name: "Yellow-Billed Blue Magpie",
		noisy: true,
	},
	{
		intelligent: true,
		diet: "omnivore",
		name: "American Crow",
	},
];
