// Frontsies

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var userSentence = $("#userSentence").val();

    console.log(translate(userSentence));
  });
});

// Backsies

  function translate(userSentence) {

    var vowels = ['a','e','i','o','u','A','E','I','O','U']; // creating an array of vowels called vowels
    var pigglyArray = userSentence.split(''); // taking the input (userSentence in this case) and performing the split method on it. results are assigned to pigglyArray.

    //remove first letter if a vowels
    if(vowels.includes(pigglyArray[0])){
      pigglyArray.pop();
    }
    pigglyArray.push('a');
    pigglyArray.push('y');

    var pigglySentence = pigglyArray.join(''); //

    return pigglySentence;
  }
