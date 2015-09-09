var pigLatin = function(word) {


  var firstLetter = word[0];
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  // function isVowel(v) {
  //
  //   return ['a', 'e', 'i', 'o', 'u'].indexOf(v) !== -1;
  //
  // }

  for (var i = 0; i < word.length; i++) {

    if (firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u') {

      var vowelWord = word + 'ay';

      return vowelWord;

    } else if (firstLetter != 'a' || firstLetter != 'e' || firstLetter != 'i' || firstLetter != 'o' || firstLetter !=  'u') {

      var sliceWord = word.slice(word.indexOf() != -1) + 'ay';

      return sliceWord;

    }

  }


};
