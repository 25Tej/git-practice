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


// export const recipeDataArray: {
//     id: string;
//     title: string;
//     publisher: string;
//     sourceUrl: string;
//     image: string;
//     servings: number;
//     cookingTime: number    ;
//     ingredients: string[];
//     key?: string;
// }[] = [
//     {
//         id: "1",
//         title: "Spaghetti Carbonara",
//         publisher: "John Doe",
//         sourceUrl: "https://example.com/spaghetti-carbonara",
//         image: "https://example.com/images/spaghetti-carbonara.jpg",
//         servings: 4,
//         cookingTime: 30,
//         ingredients: [
//             "200g spaghetti",
//             "100g pancetta",
//             "2 large eggs",
//             "50g pecorino cheese",
//             "50g parmesan",
//             "Black pepper",
//             "Salt"
//         ],
//         key: "unique-key-1"
//     },
//     {
//         id: "2",
//         title: "Chicken Curry",
//         publisher: "Jane Smith",
//         sourceUrl: "https://example.com/chicken-curry",
//         image: "https://example.com/images/chicken-curry.jpg",
//         servings: 4,
//         cookingTime: 45,
//         ingredients: [
//             "500g chicken breast",
//             "2 onions",
//             "3 garlic cloves",
//             "1 tbsp ginger",
//             "2 tbsp curry powder",
//             "400ml coconut milk",
//             "Salt",
//             "Pepper"
//         ]
//     },
//     {
//         id: "3",
//         title: "Vegetable Stir Fry",
//         publisher: "Alice Johnson",
//         sourceUrl: "https://example.com/vegetable-stir-fry",
//         image: "https://example.com/images/vegetable-stir-fry.jpg",
//         servings: 2,
//         cookingTime: 20,
//         ingredients: [
//             "1 bell pepper",
//             "1 carrot",
//             "100g broccoli",
//             "2 tbsp soy sauce",
//             "1 tbsp olive oil",
//             "1 garlic clove",
//             "Salt",
//             "Pepper"
//         ],
//         key: "unique-key-2"
//     }
// ];

