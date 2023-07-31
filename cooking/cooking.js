module.exports = {
  createIngredient,      
  calculateIngredientCost, 
  createPantry, 
  addIngredient, 
  createNewRecipe,
  compareIngredients

}

function createIngredient(theName, theUnit, theCost) {
  return {name: theName, unit: theUnit, costPerUnit: theCost}
}

function calculateIngredientCost(ingredientObject, numOfPieces) {
  return `${numOfPieces} pieces of ${ingredientObject.name} cost $${ingredientObject.costPerUnit * numOfPieces}0.`
}

function createPantry(pantryArray) {
  var names = {ingredients: []}
  if (!pantryArray) {
    names.ingredients = []
    return names
  }
 else {
  for (var i = 0; i < pantryArray.length; i++) {
    names.ingredients.push(pantryArray[i].name)   
   }
   return names
 }
}

function addIngredient(pantryObject, ingredientObject) {
  if (pantryObject.ingredients.includes(ingredientObject.name)) {
    return `You already have ${ingredientObject.name} in your pantry!`
  }
  pantryObject.ingredients.push(ingredientObject.name)
  return pantryObject.ingredients
}

function createNewRecipe(ingredientsArray, difficulty) {
  return {ingredientsNeeded: ingredientsArray, difficulty: difficulty || 'normal'}
}

function compareIngredients(recipeObject, pantryObject) {
  var pantryIngredients = pantryObject.ingredients[0] + pantryObject.ingredients[1]
  var recipeIngredients = recipeObject.ingredientsNeeded[0].name + recipeObject.ingredientsNeeded[1].name
  if (pantryIngredients === recipeIngredients) {
    return 'Yay! You have all the ingredients to cook this recipe!'
  }
  return 'Oops! You need to go shopping before you can cook this recipe!'
}