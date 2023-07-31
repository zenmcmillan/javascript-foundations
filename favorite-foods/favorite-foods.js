
module.exports = { 
  createFavoriteFood,
  commentOnSpiciness,
  orderFood,
  createShoppingList
};

function createFavoriteFood(pizzaObject) {
  return {name: pizzaObject.dish, ingredients: pizzaObject.ingredients, isSpicy: pizzaObject.isSpicy, timesOrdered: 0}
}

function commentOnSpiciness(dish) {
 if (dish.isSpicy) {
  return 'Wow, this Pho is so spicy!'
 }
 return 'Phew, this Lasagna is not very spicy.'
}

function orderFood(dish) {
  return {timesOrdered: dish.timesOrdered+= 1} 
}

function createShoppingList(array) {
 var ingredientsArray = array
 
 for (var i = 0; i < ingredientsArray.length; i++) {
   return ingredientsArray[0].ingredients.concat(ingredientsArray[1].ingredients)
  }
 }

