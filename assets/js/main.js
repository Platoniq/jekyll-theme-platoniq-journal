console.log("jekyll-theme-platoniq-journal");

$(document).ready(function() {
  var $btn = $(".header__locale-selector button.burger");
  var $menu = $(".menu__locale-selector");

  $btn.click(function(e) {
    $btn.toggleClass("status-open");
    $menu.toggleClass("status-open");
  });

  var $gallery = $(".pj-gallery .pj-gallery-images");

  $galleryBtnPrevious = $(".pj-gallery-button-previous");
  $galleryBtnNext = $(".pj-gallery-button-next");

  // https://www.jqueryscript.net/slider/Fully-Responsive-Flexible-jQuery-Carousel-Plugin-slick.html
  $gallery.slick({
    prevArrow: $galleryBtnPrevious.prop("outerHTML"),
    nextArrow: $galleryBtnNext.prop("outerHTML"),
    infinite: false
  });

  $galleryBtnPrevious.detach();
  $galleryBtnNext.detach();
});
