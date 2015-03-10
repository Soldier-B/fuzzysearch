'use strict';

function fuzzysearch(query, text){
  var currentIndex = 0, lastIndex = -1;

  if(query.length > text.length)
    return false;

  if(query === text || text.indexOf(query) + 1)
    return true;

  return [].every.call(query, function(character){
    currentIndex = text.indexOf(character, lastIndex + 1);
    lastIndex = currentIndex;
    return currentIndex + 1;
  });
}

module.exports = fuzzysearch;
