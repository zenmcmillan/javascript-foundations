module.exports = { 
  createBirthday, 
  celebrateBirthday, 
  countBirthdays
 };

 function createBirthday(theName, theMonth, theDay) {
  return {name: theName, month: theMonth, day: theDay}
 }

function celebrateBirthday(birthdayObject) {
 return `Today is ${birthdayObject.month}/${birthdayObject.day}! Happy birthday, ${birthdayObject.name}!`
}

function countBirthdays(birthdaysArray, monthNumber) {
  var months = []
 for (var i = 0; i < birthdaysArray.length; i++) {
  if (birthdaysArray[i].month === monthNumber)
    months.push(birthdaysArray[i])
 }
 return months.length
}