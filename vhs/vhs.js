

module.exports = {  
  createTape, 
  reset, 
  createCollection,
   previewCollection
}

function createTape(stringValue, boolean) {
return {title: stringValue, readyToPlay: boolean || false}
}

function reset(tapeObject) {
   tapeObject.readyToPlay = true
   return tapeObject

}

function createCollection (tapeObject1, tapeObject2, tapeObject3) {
  if (tapeObject1, tapeObject2,tapeObject3) {
    var tapeObjects = []
    tapeObjects.push(tapeObject1, tapeObject2, tapeObject3)
    return tapeObjects
  } else {
    return 'Your collection is empty.'    
  }
}

function previewCollection(tapeObjectsArray) {
  var titles = []
  for ( var i = 0; i < tapeObjectsArray.length; i++) {
    titles.push(tapeObjectsArray[i].title)
  }
  return titles
}



