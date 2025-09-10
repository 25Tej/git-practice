"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecipe = void 0;
var model_1 = require("../mock/model");
function getRecipe(title) {
    for (var _i = 0, recipeDataArray_1 = model_1.recipeDataArray; _i < recipeDataArray_1.length; _i++) {
        var data = recipeDataArray_1[_i];
        if (data.title == title) {
            return data;
        }
    }
    throw new Error("Title not found");
}
exports.getRecipe = getRecipe;
