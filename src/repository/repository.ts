
// import recipes from "../mock/model";
        
// async function getRecipeByName(name) {
//     const recipe = recipes.find(recipe => recipe.name.toLowerCase() === name.toLowerCase());
//     if (!recipe) {
//         throw new Error('premise not found'); // Adjusted error message
//     }
//     return recipe;
// }

// export default { getRecipeByName };
import recipes from "../mock/model";   

function getRecipe(name: string): typeof recipes[number] {
    for (const recipe of recipes) {
        if (recipe.name.toLowerCase() === name.toLowerCase()) { //here we are checking the recipe name by converting it into lowercase and if matches return recipe or else throw error
            return recipe;    
        }
    }
    throw new Error("Recipe not found");
}

export { getRecipe };
