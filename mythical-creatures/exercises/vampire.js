

module.exports = {
   createVampire, 
   drink, 
   findBatLovers, 
   encounterDeliciousVictim, 
   inquirePlace
}

function createVampire(name, thePet = 'bat') {
 return {name, pet: thePet, thirsty: true,
         ouncesDrank: 0}
}

function encounterDeliciousVictim(vampireObject) {
  if (!vampireObject.thirsty) {
   return 'No thanks, I am too full.'
  }
return "I WANT TO SUCK YOUR BLOOD!"
}

function drink(vampireObject) {
 vampireObject.ouncesDrank+= 10
  if (vampireObject.ouncesDrank === 50) {
    vampireObject.thirsty = false
    Object.freeze(vampireObject)
  }
 return vampireObject
}

function inquirePlace(locationsArray, locationString) {
  for (var i = 0; i < locationsArray.length; i++) {
    if (locationsArray[i] === locationString) {
      return "Yes, I have spent some time in " + locationString + "."
    }
  }
  return "No, I have never been to " + locationString + "."  
}

function findBatLovers(batLoversArray) {
  var loversOfBats = []
 for (var i = 0; i < batLoversArray.length; i++) {
  if (batLoversArray[i].pet === 'bat') {
     loversOfBats.push(batLoversArray[i].name)
  }
 }
 return loversOfBats
}
