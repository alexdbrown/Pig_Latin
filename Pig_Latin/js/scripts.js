var pigLatin = function(word) {

  var firstLetter = word[0];
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var fragment = [];

  for (var i = 0; i < word.length; i++) {

    if (vowels.indexOf(firstLetter) !== -1) {

       if (word[0] == 'y') {
          vowels.pop();
          continue;

          } else {
            var vowelWord = word + 'ay';
            return vowelWord;
          }

    } else if (vowels.indexOf(firstLetter) == -1) {
        for (var i = 0; i < word.length; i++) {
        if (word[i] == 'q' && word[i+1] == 'u') {
          fragment.push(word[i], word[i+1]);

        } else if (vowels.indexOf(word[i]) == -1)  {
            fragment.push(word[i]);

        } else {
              break;
          }
        }
    }
      var fragmentString = fragment.toString().replace(/,/g, '');
      var sliceWord = word.slice(fragment.length) + fragmentString + 'ay';
      return sliceWord;
  }

};

$(document).ready(function(){

  $("form#pig-latin").submit(function(event) {
    var word = $("input#word").val();
    var result = pigLatin(word);

    $(".word").text(word);
    $(".latin").text(result);

    $("#result").show();
    event.preventDefault();

  });

});
