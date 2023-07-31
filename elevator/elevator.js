module.exports = {
  createElevator,
  changeFloors,
 dropOffPassenger 
    };

function createElevator(theBuilding, theFloor, theCurrentFloor, thePassengers) {
  return {building: theBuilding, floors: theFloor, currentFloor: theCurrentFloor, passengers: thePassengers}
}

function changeFloors(elevatorObject, floor) {
  if (elevatorObject.currentFloor === floor) {
    return `You're already on floor ${floor}!`
  } else if (floor > elevatorObject.floors) {
    return `Floor ${floor} does not exist!`
  }
  return `Taking you to floor ${floor}!`
}

function dropOffPassenger(elevatorObject, passengerName) {
  var index = elevatorObject.passengers.indexOf(passengerName) 
    elevatorObject.passengers.splice(index, 1)
    return elevatorObject.passengers
 }

