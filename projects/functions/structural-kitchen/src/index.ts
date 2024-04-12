// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.
export type Ingredients = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

export type ResultRecipeFailed = {
	succeeded: false;
};

export type ResultRecipeSucceeded = {
	succeeded: true;
	newStock: Ingredients;
};
export type ResultRecipe = ResultRecipeFailed | ResultRecipeSucceeded;

export type Recipe = (ingredients: Ingredients) => ResultRecipe;

export type Kitchen = {
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => boolean;
	prepare: (recipe: Recipe) => boolean;
};

export type Cleaner = (dirt: number, time?: number) => number;

export type Supplier = (expense: number) => Ingredients;

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): Kitchen {
	let dirt = 0;
	let stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};

	return {
		announce: () => {
			return `I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`;
		},
		clean(time?: number) {
			dirt = cleaner(dirt, time);
		},
		purchase(expense: number) {
			if (budget >= expense) {
				let ingredients = supplier(expense);
				stock.breads += ingredients.breads;
				stock.fruits += ingredients.fruits;
				stock.sauces += ingredients.sauces;
				stock.vegetables += ingredients.vegetables;
				budget -= expense;
				return true;
			}
			return false;
		},
		prepare(recipe: Recipe) {
			if (dirt < 100) {
				dirt++;
				let recipeResult = recipe(stock);
				if (recipeResult.succeeded) {
					stock = recipeResult.newStock;
					return true;
				}
			}
			return false;
		},
	};
}
