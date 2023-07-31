module.exports = { 
  issueCard,
  searchByAuthor
};

function issueCard(theName, theAge) {
  if (theAge < 12) {
    return {name: theName, age: theAge, numBooksCheckedOut: 0, isChild: true}
  }
  return {name: theName, age: theAge, numBooksCheckedOut: 0, isChild: false}
}

function searchByAuthor(collectionArray, authorName) {
  var searchResults = [];
  for (var i = 0; i < collectionArray.length; i++) {
    if (collectionArray[i].author === authorName) {
      searchResults.push(collectionArray[i]);
    }
  }
 if (!searchResults.length) {
    return 'No book found for search criteria'
  }
  return searchResults;
}
