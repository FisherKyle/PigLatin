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
    var pigglySentence = (userSentence + "ay")
    return pigglySentence;
  }
