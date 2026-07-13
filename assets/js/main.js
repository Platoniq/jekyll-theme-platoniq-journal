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
   * Author
   * 
   */
  var $authors = $(".pj-author.pj-author__hidden");
  var $authorName = $(".pj-hero__data__author");
  
  $authors.hide();
  
  var initialAuthorProperties = { left: "100vw" };
  var targetAuthorProperties = { left: "0vw" };
  var duration = 200;

  $authorName.click(function(e) {
    $.each($authors, function(index, author) {
      var $author = $(author);
      var $authorCloseBtn = $author.find(".btn-close").on("click", function() {
        hideAuthor($author);
      });
      
      function showAuthor($author) {
        // Show author cards
        $author.removeClass(".pj-author__hidden");
        $author.css(initialAuthorProperties);
        $author.slideDown(duration, function() {
          if (index == 0) {
            $(document).scrollTop($author.offset().top - window.innerHeight / 2);
          }
        });
        $author.animate(targetAuthorProperties, {
          duration: duration,
          start: function() {
            $(this).css({
              display: "grid",
              left: targetAuthorProperties.left
            });
          }
        });
      }

      function hideAuthor($author) {
        // Hide author cards
        $author.animate(initialAuthorProperties, {
          duration: duration,
          start: function() {
            $(this).css(initialAuthorProperties);
          },
          done: function() {
            $author.slideUp(duration);
          }
        });
      }
      
      if ($author.is(":hidden")) {
        showAuthor($author);
      } else {
        hideAuthor($author);
      }
    });
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

    // Lazy: show the poster + play badge until clicked, then load and autoplay.
    $overlay.on("click", function(e) {
      if (!src) return;

      var sep = src.indexOf("?") === -1 ? "?" : "&";
      var $iframe = $(
        `<iframe src="${src}${sep}autoplay=1" ` +
        `allow="autoplay; encrypted-media; fullscreen" allowfullscreen frameborder="0"></iframe>`
      );

      $video.append($iframe);
      $overlay.remove();
    });
  });

  /*
   *
   * Vertical category nav
   * The nav is position: fixed, so it would overlay the edition pager
   * and footer; fade it out once the articles section scrolls past.
   *
   */

  var $verticalNav = $(".pj-nav-vertical");
  var $articlesSection = $(".pj-articles");

  if ($verticalNav.length && $articlesSection.length) {
    var toggleVerticalNav = function() {
      var articlesBottom = $articlesSection[0].getBoundingClientRect().bottom;
      $verticalNav.toggleClass("status-hidden", articlesBottom < window.innerHeight / 2);
    };

    $(window).on("scroll resize", toggleVerticalNav);
    toggleVerticalNav();
  }

  /*
   *
   * Video cards (videos section / videos page)
   * Lazily swap the thumbnail for an autoplaying iframe on click.
   *
   */

  $(document).on("click", ".pj-video-card__thumb", function() {
    var $thumb = $(this);
    var src = $thumb.closest(".pj-video-card").data("embed");

    if (!src) return;

    var sep = src.indexOf("?") === -1 ? "?" : "&";
    var $iframe = $(
      `<iframe src="${src}${sep}autoplay=1" class="pj-video-card__iframe" ` +
      `allow="autoplay; encrypted-media; fullscreen" allowfullscreen frameborder="0"></iframe>`
    );

    $thumb.replaceWith($iframe);
  });
});
