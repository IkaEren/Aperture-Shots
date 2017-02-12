$(document).ready(function(){

  // =Hero
  // Alway make hero-container height equal to window height

  var $landingpageContainer = $('.landingpage');

  $landingpageContainer.height(window.innerHeight);

  // When user resize browser window, hero container needs to have the same
  // height as browser window height.

  $(window).resize(function() {
    $landingpageContainer.height(window.innerHeight);
  });

  // Menu initialization

  var $menuIcon = $('.menu-icon'),
      $navigation = $('.navigation'),
      $mainNavigation = $('.main-navigation'),
      $navigationLink = $('.main-navigation a');

  $(window).scroll(function() {
    if(window.scrollY > window.outerHeight) {
      $menuIcon.addClass('active');
    } else {
      $menuIcon.removeClass('active');
    }
  });

  $menuIcon.click(function(e) {
    e.preventDefault();

    $navigation.toggleClass('active');
  });

  $mainNavigation.singlePageNav({
      filter: ':not(.external)',
      speed: 1000,
      currentClass: 'current',
      easing: 'swing',
      updateHash: false,
      beforeStart: function() {
      },
      onComplete: function() {
        $navigation.removeClass('active');
      }
  });

// Isotope filters
var $FilterLinks = $('.filters li'),
    $container = $('.photos');

$FilterLinks.find('a').click(function(){

  $FilterLinks.removeClass('active');

  $container.isotope({
    // options
    filter: $(this).attr('data-filter'),
    itemSelector: '.isotope-item',
    animationEngine : "best-available",
    masonry: {
      columnWidth: '.isotope-item'
    }
  });

  $(this).parent().addClass('active');

  return false;
});

  // Scrollreveal initialize
  //var config = {
    //origin: 'bottom',
    //container: '.landingpage',
    //easing: 'hustle',
    //reset:  false,
    //useDelay: 'always',
    //opacity: .1,
    //viewFactor: 0.2,
    //mobile: true
  //};

//new scrollReveal(config);
// Fancybox initialization
  $(".fancybox").fancybox();
});
$(document).ready(function() {
  $('.filters a').on("click", function(){
      var selector = $(this).attr('data-filter');
      if(selector == "*"){
          $(".fancybox").attr("data-fancybox-group", "gallery");
      } else{
          $(selector).find(".fancybox").attr("data-fancybox-group", selector);
      }
     return false;
  });
});
