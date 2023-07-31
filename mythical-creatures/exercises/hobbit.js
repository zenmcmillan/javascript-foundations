module.exports = {
   createHobbit, 
   celebrateBirthday, 
    getRing, 
   meetPeople, 
  // findFriends
}

function createHobbit(theName = 'unknown', theAge = 0) {
 return {name: theName, age: theAge, isAdult: false, isOld: false, acquaintances: []}
}

function celebrateBirthday(hobbitObject) {
  if (hobbitObject.age < 32) {
    return hobbitObject = {age: hobbitObject.age+=1, isAdult: false, isOld: false}
  } 
  else if(hobbitObject.age > 32 && hobbitObject.age < 100) {
    return hobbitObject = {age: hobbitObject.age+=1, isAdult: true, isOld: false}
  }
  else {
    return hobbitObject = {age: hobbitObject.age+=1, isAdult: true, isOld: true}
 }
}

function getRing(hobbitObject) {
  if (hobbitObject.name === 'Frodo') {
    return 'Here is the ring!'
  }
  return 'You can\'t have it!'
}

// function meetPeople(hobbitObject, peopleArray) {
//   hobbitObject.acquaintances = peopleArray
//   return hobbitObject
// }







