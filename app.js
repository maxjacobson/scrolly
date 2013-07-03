$(document).ready(function() {
  $("body").addClass("pretty");
  $(document).scroll(function() {
    var position = $(document).scrollTop();
    if(position > 500) {
      $("body").toggleClass("ugly");
    }
  });
});