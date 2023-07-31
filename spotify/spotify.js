module.exports = {  
  createCollection, 
  createTrack,
  reviewTrack,
   addTrack,
  getTotalDuration,
   findTracksByArtist
}

function createCollection(songName, songDescription) {
  return {name: songName, description: songDescription, tracks: []}
}

function createTrack(songTitle, theArtist, theDuration) {
return {title: songTitle || 'unknown', artist: theArtist || 'unknown', duration: theDuration || 0}
}

function reviewTrack(trackObject) {
  if (trackObject.artist === 'Red Hot Chili Peppers') {
    return `The song ${trackObject.title} rules!`
  }
  return 'I wish this was a Red Hot Chili Peppers song.'
}

function addTrack(collectionObject, trackObject) {
 collectionObject.tracks.push(trackObject)
 return collectionObject
}

function getTotalDuration(collection) {
  var totalDuration = 0;
  
  for (var i = 0; i < collection.tracks.length; i++) {
    totalDuration += collection.tracks[i].duration;
  } 
  return totalDuration;
}


function findTracksByArtist(songCollection, theArtist) {
  var theMidnightSongs = []
 for ( var i = 0; i < songCollection.tracks.length; i++) {
  if (songCollection.tracks[i].artist.includes(theArtist)) {
    theMidnightSongs.push(songCollection.tracks[i])
  }
 }
 return theMidnightSongs
}
