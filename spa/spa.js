
module.exports = { 
   createCustomer, 
   greeting, 
   createService,
   bookServices, 
   applyGiftCard 
}

function createCustomer(nameString, billNumber, bookingsArray) {
  return {name: nameString, bill: billNumber, bookings: bookingsArray || []}
};

function greeting(customer) {
 if (customer.bill > 0) {
  return `${customer.name}! Welcome back to Happy Spa`
 }
 return `${customer.name}! Welcome to Happy Spa`
};

function createService(serviceName, cost) {
  var service = {name: serviceName, cost: cost}
 if (service.name != undefined || service.cost != undefined) {
  return {name: serviceName, cost: cost}
 }
 return 'Please provide service name and cost.'
}

// function bookServices(customerObject, serviceObject) {
//   customerObject.bookings.push(serviceObject.name)
//   return customerObject
// }

// function bookServices(customerObject, serviceObject) {
//   customerObject.bookings.push(serviceObject.name)
//   customerObject.bill = 115
//   return customerObject  
//   }

function bookServices(customerObject, serviceObject) {
  customerObject.bookings.push(serviceObject.name);
  customerObject.bill = (customerObject.bill || 0) + serviceObject.cost;
  return customerObject;
}


function applyGiftCard(servicesArray, priceLimit) {
  var affordable = []
 for (var i = 0; i < servicesArray.length; i++) {
  if ( servicesArray[i].price <= priceLimit) {
   affordable.push(servicesArray[i].name) 
  }
 }
 return affordable     
} 


 




