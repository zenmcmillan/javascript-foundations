module.exports = {
  createIngredient, 
 createTaco, 
 addIngredientToTaco, 
  calculatePrice 
}

function createIngredient(ingredient, thePrice) {
  return {name: ingredient || 'unknown', price: thePrice || 0.00}
}

function createTaco(tacoName, theIngredients) {
  return {name: tacoName || 'custom', ingredients: theIngredients || []}
}

function addIngredientToTaco(tacoObject, ingredientObject) {
  tacoObject.ingredients.push(ingredientObject)
  return tacoObject
}

function calculatePrice(tacoObject) {
  var totalPrice = 0
  for (var i = 0; i < tacoObject.ingredients.length; i++) {
     totalPrice += tacoObject.ingredients[i].price
  }
  return totalPrice
}

