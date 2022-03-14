console.log("jekyll-theme-platoniq-journal");

$(document).ready(function() {
  /*
   * 
   * Menus
   * 
   */
  function initializeMenu ($btn, $menu) {
    $btn.click(function(e) {
      $btn.toggleClass("status-open");
      $menu.toggleClass("status-open");
    });
  }

  initializeMenu(
    $(".header__locale-selector button.burger"),
    $(".pj-language-menu")
  )

  initializeMenu(
    $(".header__volume button.burger"),
    $(".pj-volume-menu")
  )


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
