var thirdPartyCookie = "platoniq-third-party-cookies-consent";
var newsletterCookie = "platoniq-cta-newsletter";
var expirationDays = 90;
var path = "/";

$(document).ready(function() {
  var thirdPartyCookieValue = $.cookie(thirdPartyCookie);
  if (thirdPartyCookieValue == "true") {
    $("#cookie-notice").hide();
    {% include default/analytics.js %}
  } else if (thirdPartyCookieValue == "false") {
    $("#cookie-notice").hide();
  } else {
    $("#cookie-notice").show();
  }

  $("#cookie-notice-accept").on("click", () => {
    $.cookie(thirdPartyCookie, "true", { expires: expirationDays, path: path });
    $("#cookie-notice").hide();
    location.reload();
  });
  
  $("#cookie-notice-decline").on("click", () => {
    $.cookie(thirdPartyCookie, "false", { expires: expirationDays, path: path });
    $("#cookie-notice").hide();
    location.reload();
  });

  if ($.cookie(newsletterCookie) == "true") {
    $(".cta__newsletter > :not(.cta__filled)").remove();
    $(".cta__newsletter").append($(".cta__newsletter .cta__filled > *"));
  } else {
  }

  $("form").on("submit", () => {
    $.cookie(newsletterCookie, "true", { expires: expirationDays, path: path });
  });
});