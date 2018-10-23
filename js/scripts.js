var palindrome = function(word){
 return word == word.split('').reverse().join('')
}


$(document).ready(function(){
  $("#palindrome").submit(function(event){
    var phrase = ($("#userword").val());
    $("#output").text(palindrome(phrase));
    event.preventDefault();
  });
});
