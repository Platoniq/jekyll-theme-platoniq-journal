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
   * Author
   * 
   */
  var $author = $(".pj-author.pj-author__hidden");
  var $authorName = $(".pj-hero__data__author");

  $author.hide();

  var initialAuthorProperties = { left: "100vw" };
  var targetAuthorProperties = { left: "0vw" };
  var duration = 200;

  $authorName.click(function(e) {
    if ($author.is(":hidden")) {
      $author.removeClass(".pj-author__hidden");

      $author.css(initialAuthorProperties);
      $author.slideDown(duration);
      $author.animate(targetAuthorProperties, {
        duration: duration,
        start: function() {
          $(this).css({
            display: "grid",
            left: targetAuthorProperties.left
          });
        }
      });
    } else {
      $author.animate(initialAuthorProperties, {
        duration: duration,
        start: function() {
          $(this).css(initialAuthorProperties);
        },
        done: function() {
          $author.slideUp(duration);
        }
      })
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
  var $customLinks = $(".pj-file__button a");

  $.each($customLinks, function(index, customLink) {
    $customLink = $(customLink);

    var customUrl = $customLink.attr("href");

    if (customUrl && !(/mailto:/.test(customUrl))) {

      if (!(/^\/.*/).test(customUrl)) {
        var url = new URL(customUrl);

        url.searchParams.append("url", window.location);

        $customLink.attr("href", url);
      }
    }
  });


  /*
   * 
   * Gallery
   * 
   */
  var $galleries = $(".pj-gallery .pj-gallery-images");

  $.each($galleries, function(index, gallery) {
    $gallery = $(gallery);

    if ($gallery.children(".pj-gallery-image-container").length > 1) {
      $galleryBtnPrevious = $gallery.parent().find(".pj-gallery-button-previous");
      $galleryBtnNext = $gallery.parent().find(".pj-gallery-button-next");

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
  });

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
