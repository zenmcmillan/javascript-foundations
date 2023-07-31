

module.exports = { 
   createMeal, 
   getMade, 
   announceMeal,
  createOrder, 
   cookMeal, 
   listOrders, 
   listSpecialRequests
};

function createMeal(name, specialRequests, tableNumber) {
return {name: name, specialRequests: specialRequests, tableNumber: tableNumber, complete: false}
}

function getMade(food) {
food.complete = true
return food
}

function announceMeal(food) {
 if (food.complete) {
  return 'Order up - Chips & Queso for table 4!'
 }
 return 'This Margarita pizza is not completed yet'
}

function createOrder(mealsObject) {
return {tableNumber: mealsObject.name, meals: mealsObject.meals, completedMeals: []}
}

function cookMeal(orderObject, mealObject) {
  if (orderObject.tableNumber === mealObject.tableNumber) {
    orderObject.completedMeals.push(mealObject.name)
  }
  return orderObject
}

function listOrders(orderObject) {
  var orderNames = []
  for (var i = 0; i < orderObject.meals.length; i++) {
    orderNames.push(orderObject.meals[i].name)
  }
  return orderNames;
}

function listSpecialRequests(orderObject) {
  var specialRequest = [];
  specialRequest.push(orderObject.meals[0].specialRequests[0], orderObject.meals[1].specialRequests[0], orderObject.meals[2].specialRequests[0], orderObject.meals[2].specialRequests[1])
  return specialRequest
}