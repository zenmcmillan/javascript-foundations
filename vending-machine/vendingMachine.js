
module.exports = {
  createItemStock, 
  collectChange, 
  makePurchase
}

function createItemStock(name, quantity, price) {
return {name: name || 'unknown', quantity: quantity || 0, price: price || 1.00}
}

function makePurchase(itemObject, money) {
  if (itemObject.price > money) {
    return `Sorry, you need at least $${itemObject.price} to make that purchase`
  } else if (!itemObject.quantity) {
    return 'Sorry, there are none left'
  }
  else if (itemObject.price >= money) {
    return `Here are your ${itemObject.name}`
  }
}

function collectChange(changeArray) {
  var total = 0
  for (var i = 0; i < changeArray.length; i++) {
     total+= changeArray[i]   
  }
  return total
}