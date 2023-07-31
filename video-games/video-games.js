module.exports = {
  createPlayer,
  createLevel,
  findCoins,
  defeatPlayer,
 };

function createPlayer(playerName, playerAge, moveSetArray) {
return {name: playerName, age: playerAge, moveset: moveSetArray}
}

function createLevel(theName, playersArray) {
return {name: theName, players: playersArray, coins: 0, lives: 3}
}

function findCoins(levelObject, number) {
  if (number === 100) {
    levelObject.lives += 1
    levelObject.coins = 100
    return levelObject
  }
   else {levelObject.coins = number
return levelObject
   }
}

function defeatPlayer(levelObject) {
  if (levelObject.lives === 1) {
    return 'GAME OVER'
  }
  else {
    levelObject.lives -= 1  
  }
  return levelObject
 }
