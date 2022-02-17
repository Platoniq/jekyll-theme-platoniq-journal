console.log("jekyll-theme-platoniq-journal");

$(document).ready(function(){
  var $btn = $(".header__locale-selector button.burguer");
  var $menu = $(".menu__locale-selector");

  $btn.click(function(e) {
    $btn.toggleClass( "status-open" );
    $menu.toggleClass( "status-open" );
  });
});
