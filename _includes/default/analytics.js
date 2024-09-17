// Analytics code
var analytics_id = "{{ site.analytics_id }}";

window.dataLayer = window.dataLayer || [];

$.getScript("https://www.googletagmanager.com/gtag/js?id=" + analytics_id, function() {
  function ga() { dataLayer.push(arguments); }

  ga('js', new Date());
  ga('config', analytics_id);

  function handleFormSubmit(event) {
    var $form = $(event.target);
    var formName = $form.attr("name");

    ga("send", {
      hitType: "event",
      eventCategory: "Forms",
      eventAction: formName
    });
  }

  function handleOutboundLinkClicks(event) {
    ga('send', 'event', {
      eventCategory: 'Outbound Link',
      eventAction: 'click',
      eventLabel: event.target.href,
      transport: 'beacon'
    });
  }

  $("a").on("click", handleOutboundLinkClicks);
  $("form").on("submit", handleFormSubmit);
});
