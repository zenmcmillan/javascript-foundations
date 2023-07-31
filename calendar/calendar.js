module.exports = { 
  createEvent, 
  createCalendar, 
  reportMonthlyEvents
 };

 function createEvent(theTitle, theMonth, theDay) {
  if (theDay > 31 || !theDay) {
    return `Error: ${theDay} is not a valid day`
  }
return {title: theTitle, month: theMonth, day: theDay}
 }

 function createCalendar(nameString, eventsArray) {
 return {owner: nameString, events: eventsArray}
 }

 function reportMonthlyEvents(calendarObject, monthString) {
  var sameMonthEvents = []
   for (var i = 0; i < calendarObject.events.length; i++) {
    if (calendarObject.events[i].month === monthString) {
      sameMonthEvents.push(calendarObject.events[i])
    }
   }
   return sameMonthEvents
 }