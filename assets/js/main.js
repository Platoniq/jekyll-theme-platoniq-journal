console.log("jekyll-theme-platoniq-journal");

$(document).ready(function() {
  /*
   * 
   * Menus
   * 
   */
  function initializeMenu($btn, $menu) {
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
    $(".header__sitemap button.burger"),
    $(".pj-sitemap-menu")
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
   * Call to action
   * 
   */
  var ctaUrl = $(".pj-cta__button a, .pj-file__button a").attr("href");

  if (ctaUrl) {
    var url = new URL(ctaUrl);
    url.searchParams.append("url", window.location);
    $(".pj-cta__button a, .pj-file__button a").attr("href", url);
  }


  /*
   * 
   * Gallery
   * 
   */
  var $gallery = $(".pj-gallery .pj-gallery-images");

  if ($gallery.children("img").length > 1) {
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
  }


  /*
   * 
   * Videos
   * 
   */

  $.each($(".pj-video"), function(index, pjVideo) {
    var $video = $(pjVideo);
    var $overlay = $video.find(".pj-video__overlay");

    var src = $video.data("src");

    var $iframe = $(`<iframe src="${src}" class="bw"></iframe>`);
    $iframe.height("33vh");
    $iframe.width("100%");

    $video.append($iframe);

    $overlay.on("click", function(e) {
      $video.find("iframe").removeClass("bw");
      $overlay.remove();
    });
  });
});
