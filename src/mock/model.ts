// data/mockData.ts
class Recipe {
    name: string;
    ingredients: string[];
    instructions: string;

    constructor(name: string, ingredients: string[], instructions: string) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}

const recipes: Recipe[] = [
    new Recipe('Pasta', ['pasta', 'tomato sauce', 'cheese'], 'Boil pasta and add sauce.'),
    new Recipe('Salad', ['lettuce', 'tomato', 'cucumber'], 'Chop ingredients and mix them together.'),
    new Recipe('Pizza', ['dough', 'cheese', 'pepperoni'], 'Bake dough, add toppings, and bake again.')
];

export default recipes;
