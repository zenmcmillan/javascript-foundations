
module.exports = {
   createDragon, 
   greetRider, 
   eat, 
   findFireBreathers
}

function createDragon(name, rider, temperment) {
 return dragon = {name, rider, temperment, 
        timesEaten: 0, hungry: true}
};

function greetRider(dragonObject) {  
 return "Hi, " + dragonObject.rider + "!";
}

function eat(dragonObject) {
 dragonObject.timesEaten++
 if (dragonObject.timesEaten >= 3) {
  dragonObject.hungry = false
 }
 return dragonObject
} 

function findFireBreathers(dragonsArray) {
  var aggressiveDragons = []
  for (var i = 0; i < dragonsArray.length; i++) {
    if (dragonsArray[i].temperment === 'aggressive') {
      aggressiveDragons.push(dragonsArray[i])
    }  
  }
  return aggressiveDragons
}