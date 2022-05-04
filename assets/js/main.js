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
   * Call to action: Donate
   * 
   */
  var $donateCtaLink = $(".cta__donate .pj-cta__button a");
  var donateUrl = $donateCtaLink.attr("href");

  if (donateUrl) {
    var currentUrl = window.location.toString();
    var url = new URL(donateUrl);

    var lang = currentUrl.match(/\/(en|es|ca)\//)[1] || "es";
    var source = currentUrl.match(/\/(wilder\-journal\-\d+)\//)[1];
    var detail = currentUrl.match(/wilder\-journal\-\d+\/(.*)/)[1];

    url.searchParams.append("source", source);
    url.searchParams.append("detail", detail);
    url.searchParams.append("lang", lang);

    $donateCtaLink.attr("href", url);
  }

  /*
   * 
   * Call to action: Custom
   * 
   */
  var $customUrlLink = $(".pj-file__button a");
  var customUrl = $customUrlLink.attr("href");

  if (customUrl && !(/mailto:/.test(customUrl))) {
    var url = new URL(customUrl);

    url.searchParams.append("url", window.location);

    $customUrlLink.attr("href", url);
  }


  /*
   * 
   * Gallery
   * 
   */
  var $gallery = $(".pj-gallery .pj-gallery-images");

  if ($gallery.children(".pj-gallery-image-container").length > 1) {
    $galleryBtnPrevious = $(".pj-gallery-button-previous");
    $galleryBtnNext = $(".pj-gallery-button-next");

    // https://www.jqueryscript.net/slider/Fully-Responsive-Flexible-jQuery-Carousel-Plugin-slick.html
    $gallery.slick({
      prevArrow: $galleryBtnPrevious.prop("outerHTML"),
      nextArrow: $galleryBtnNext.prop("outerHTML"),
      infinite: true,
      adaptiveHeight: true
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
