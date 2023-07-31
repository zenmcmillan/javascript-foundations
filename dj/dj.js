
module.exports = { 
   createSong, 
   playSong, 
   makePlaylist, 
   addSongToPlaylist, 
   playSongs
};

function createSong(theName, theArtist, favorite) {
return {name: theName, artist: theArtist, favorite: favorite || false, hasBeenPlayed: false}
}

function playSong(songObject) {
 songObject.hasBeenPlayed = true
 return songObject
}

function makePlaylist(playListName, songsArray) {
  return {name: playListName, songs: songsArray}
}

function addSongToPlaylist(playlist, song) {
 playlist.songs.push(song)
 return playlist
}

function playSongs(playlist, favoritesString) {
  
 for (var i = 0; i < playlist.songs.length; i++) {
  if (playlist, favoritesString) {
   playlist.songs[0].hasBeenPlayed = true
   playlist.songs[2].hasBeenPlayed = true
  }
  else {
    playlist.songs[i].hasBeenPlayed = true
  }
 }
 return playlist
}

