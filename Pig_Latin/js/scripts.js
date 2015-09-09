var pigLatin = function(word) {


  var firstLetter = word[0];
  var vowels = ['a', 'e', 'i', 'o', 'u'];


  for (var i = 0; i < word.length; i++) {

    if (vowels.indexOf(firstLetter) !== -1) {

      var vowelWord = word + 'ay';

      return vowelWord;

    } else if (vowels.indexOf(firstLetter) == -1) {
      var fragment = [];

      for (var i = 0; i < word.length; i++) {

          if (vowels.indexOf(word[i]) == -1) {
            fragment.push(word[i]);
          } else {

            break;
          }

      }

      var sliceWord = word.slice(fragment.length) + fragment + 'ay';

      return sliceWord;

    }

  }


};
