var random_hex = function() {
  // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
  var r = '#'+Math.floor(Math.random()*16777215).toString(16);
  return r;
};

$(document).ready(function() {
  $("body").css("background-color", random_hex());
  $(document).scroll(function() {
    var position = $(document).scrollTop();
    if(position % 10 === 0) {
      $("body").css("background-color", random_hex());
    }
  });
});