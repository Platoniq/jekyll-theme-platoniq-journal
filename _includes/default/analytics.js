// Analytics code
var analytics_id = "{{ site.analytics_id }}";

window.dataLayer = window.dataLayer || [];

$.getScript("https://www.googletagmanager.com/gtag/js?id=" + analytics_id, function() {
  function gtag() { dataLayer.push(arguments); }

  gtag('js', new Date());
  gtag('config', analytics_id);
});
