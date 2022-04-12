var thirdPartyCookie = "platoniq-third-party-cookies-consent";
var newsletterCookie = "platoniq-cta-newsletter";
var expirationDays = 90;

$(document).ready(function() {
  if ($.cookie(thirdPartyCookie) == "true") {
    $("#cookie-notice").hide();
    {% include default/analytics.js %}
  } else {
    $("#cookie-notice").show();
  }

  $("#cookie-notice-accept").on("click", () => {
    $.cookie(thirdPartyCookie, "true", { expires: expirationDays });
    $("#cookie-notice").hide();
    location.reload();
  });

  if ($.cookie(newsletterCookie) == "true") {
    $(".cta__newsletter > :not(.cta__filled)").remove();
    $(".cta__newsletter").append($(".cta__newsletter .cta__filled > *"));
  } else {
  }

  $("form").on("submit", () => {
    $.cookie(newsletterCookie, "true", { expires: expirationDays });
  });
});