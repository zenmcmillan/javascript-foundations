module.exports = { 
   createAirport, 
   welcomeGuests, 
  landPlanes, 
   checkAirlineLocations
};

function createAirport(name, companiesArray, gates) {
  return {name: name, availableGates: gates, airlines: companiesArray}
  }

function welcomeGuests(airportObject) {
 return `Welcome to ${airportObject.name}!`
}

function landPlanes(airportObject, takenGates) {
  if (takenGates > airportObject.availableGates) {
    airportObject.message = `Oh no! Not enough gates available. Current overflow is ${takenGates - (airportObject.availableGates)}.`
    airportObject.availableGates = 0
    return airportObject
  } else {
    airportObject.availableGates = airportObject.availableGates - takenGates
  airportObject.message = `Success! Current availability is ${airportObject.availableGates}.`
  return airportObject
  }  
}

function checkAirlineLocations() {

}
























function checkAirlineLocations(allAirportsArray, airline) {
  var allAirports = []
  for (var i = 0; i < allAirportsArray.length; i++) {
    if (allAirportsArray[i].airlines.includes(airline)) {
      allAirports.push(allAirportsArray[i].name)
    }
  }
  return allAirports
}
