// Analytics code
var analytics_id = "{{ site.analytics_id }}";

window.dataLayer = window.dataLayer || [];

$.getScript("https://www.googletagmanager.com/gtag/js?id=" + analytics_id, function() {
  function gtag() { dataLayer.push(arguments); }

  gtag('js', new Date());
  gtag('config', analytics_id);
});

const matomo_id = "{{ site.matomo_id }}";
const matomo_site = "{{ site.matomo_site }}";

var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u=matomo_site;
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', matomo_id]);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
