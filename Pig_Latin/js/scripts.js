var pigLatin = function(word) {

  // var vowels  = ['a', 'e', 'i', 'o', 'u'];

  var firstLetter = word[0];

  if (firstLetter == 'a' || 'e' || 'i' || 'o' || 'u') {
    var newWord = word + 'ay';
  }
  return newWord;
};
