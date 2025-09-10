import { getRecipe } from "../repository/repository";
async function getRecipeDetails(name: string): Promise<any> {
    const recipeData = await getRecipe(name);
    return {
        name: recipeData.name,
        ingredients: recipeData.ingredients,
        instructions: recipeData.instructions,
    };
}

export { getRecipeDetails };
























// // services/recipeService.js
// import recipeRepository from '../repositories/recipeRepository';
// import { isValidRequest } from '../validator/request-validator'; // Assuming you have a request validator



// async function getRecipeDetails(recipeName: any) {
//     const myRecipee = isValidRequest(recipeName); // Validate the request
//     if (!myRecipee) {
//         throw new Error('Invalid Request');
//     }

//     const recipe = await recipeRepository.getRecipeByName(myRecipee);
//     return recipe;
// }

// export { getRecipeDetails };


