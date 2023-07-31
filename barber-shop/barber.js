module.exports = { 
  createBarber, 
  giveCompliment,
 cutHair, 
 listStyles 
};

function createBarber(theName, theEarnings, haircutsArray) {
  return {name: theName, earnings: theEarnings || 0, haircuts: haircutsArray || []};
}

function giveCompliment(haircutObject) {
 return `This ${haircutObject.style} looks great!`
}

function cutHair(barberObject, hairCutObject) {
  var totalEarnings = 0
 barberObject.haircuts.push(hairCutObject)
  for ( var i = 0; i < barberObject.haircuts.length; i++) {
   totalEarnings+= barberObject.haircuts[i].price
   barberObject.earnings = totalEarnings 
  }
 return barberObject
}

function listStyles(sandyObject, style) {
  var shortStyles = []
 for (var i = 0; i < sandyObject.haircuts.length; i++) {
  if (sandyObject.haircuts[i].hairLength === style) {
    shortStyles.push(sandyObject.haircuts[i].style)
  }
 }
 return shortStyles
}