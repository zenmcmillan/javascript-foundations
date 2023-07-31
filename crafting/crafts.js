module.exports = {
   createMaterial,
   calculateMaterialCost,
   createSupplyCloset,
   addSupply,
   createNewProject,
   compareMaterials
}

function createMaterial(theName, theUnit, theCost) {
return {name: theName, unit: theUnit, costPerUnit: theCost}
}

function calculateMaterialCost(materialObject, amount) {

  return `${amount} ${materialObject.unit}s of ${materialObject.name} costs $${materialObject.costPerUnit * amount}.`
}

function createSupplyCloset(materialsArray) {
  var closet = {supplies: []}
  if (!materialsArray) {
    return closet
  }
 for (var i = 0; i < materialsArray.length; i++) {
  closet.supplies.push(materialsArray[i].name)
 }
 return closet
}

function addSupply(supplyCloset, materialObject) {
  if (supplyCloset.supplies.includes(materialObject.name)) {
    return `You already have ${materialObject.name} in your closet!`
  }
   supplyCloset.supplies.push(materialObject.name)
  return supplyCloset.supplies
}

function createNewProject(materialsArray, statusString) {
 return {materialsNeeded: materialsArray, status: statusString || 'not started'}
}

function compareMaterials(projectObject, suppliesObject) {
 for ( var i = 0; i < suppliesObject.supplies.length; i++) {
  if (suppliesObject.supplies[i] === projectObject.materialsNeeded[0].name && projectObject.materialsNeeded[0].name) {
    return 'Yay! You can start this project!'
  }
 }
 return 'Oh no! You need to go shopping before you can start this project!'
}