console.log("jekyll-theme-platoniq-journal");

$(document).ready(function() {
  /*
   * 
   * Burger menu
   * 
   */
  var $btn = $(".header__locale-selector button.burger");
  var $menu = $(".pj-language-menu");

  $btn.click(function(e) {
    $btn.toggleClass("status-open");
    $menu.toggleClass("status-open");
  });

  /*
   * 
   * Article list
   * 
   */
  var $articles = $(".pj-articles article");

  $articles.click(function(e) {
    var href = $(e.target).attr("href");
    
    if (!href) {
      href = $(e.target).closest("article").data("href");
      window.location = href;
    }
  });

  /*
   * 
   * Gallery
   * 
   */
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
