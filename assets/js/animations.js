$(document).ready(function() {

  // Scroll journal cover when clicking on arrow
  $(".heroimage__arrow").on("click", function() {
    var height = $(".heroimage").height();
    $('html, body').animate({ scrollTop: height });
  });
});
