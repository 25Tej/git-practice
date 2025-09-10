import { errorResponse, successResponse } from "../builder/builder";
import { getRecipeDetails } from "../service/service";


async function getRecipeController(name: string) {
    try {
        const recipeDetails = await getRecipeDetails(name);
        return successResponse(recipeDetails);
    } catch (error) {
        return errorResponse(error.message);
    }
}
