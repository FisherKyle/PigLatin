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

    //append ay if starts with vowel
    if(vowels.includes(pigglyArray[0])){ // getting the first index "0" of pigglyArray and seeing if that is included "includes" in the vowels array
      pigglyArray.push('ay'); // adding a with push method to the end of array
    } else {
      while(!vowels.includes(pigglyArray[0])){ // same as line 21 but reversed to search for "if NOT" in the vowels array
        if(pigglyArray[0] === "q" && pigglyArray[1] === "u") {
          pigglyArray.push(pigglyArray.shift()); // this takes the q (shift always takes the first char) and pushing it (to the back) of the word
          pigglyArray.push(pigglyArray.shift());
        } else {
        pigglyArray.push(pigglyArray.shift()); // take off the first letter by using the shift method on piggly array, then use the push method to apply this letter to the end of pigglyArray
        }
      } pigglyArray.push('ay');
    }

    var pigglySentence = pigglyArray.join(''); //

    return pigglySentence;
  }
