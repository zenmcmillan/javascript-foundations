
module.exports = {
  createMeal,
  addDish,
  calculateCalories
 };

function createMeal(mealString, calorieNumber) {
  return {type: mealString, calorieGoal: calorieNumber, dishes: []}
};

// function addDish(meal,objectLiteralMeal ) {
//   var theMeal = objectLiteralMeal
//   meal.dishes.push(theMeal)
//   return meal
// }

function addDish(meal,objectLiteralMeal ) {
  var theMeal = objectLiteralMeal
  if (theMeal.calories <= meal.calorieGoal) {
   meal.calorieGoal = meal.calorieGoal - theMeal.calories
    meal.dishes.push(theMeal)
  }
  return meal
}

function calculateCalories(object) {
  if (object.dishes.length === 2) {
    return `${object.type} has a total of ${object.dishes[0].calories + object.dishes[1].calories} calories.`
  }
  return `${object.type} has a total of ${object.dishes[0].calories + object.dishes[1].calories + object.dishes[2].calories} calories.`
}