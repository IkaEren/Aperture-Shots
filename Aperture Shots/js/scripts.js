$(document).ready(function(){

  // =Hero
  // Alway make landing page-container height equal to window height

  var $landingpageContainer = $('.landingpage');
  $landingpageContainer.height(window.innerHeight);

  // When user resize browser window, landing page container needs to have the same
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

  // Doesn't work with the gallery , gave up cause no time. x.x
  // Scrollreveal initialize
  // window.sr = ScrollReveal({
  //   distance: '20px',
  //   origin: 'bottom',
  //   duration: 500,
  //   delay: 0,
  //   mobile: false,
  //   reset: true,
  //   useDelay: 'always',
  //   viewFactor: 0.2,
  // });
  //
  // sr.reveal('.introduction');
  // sr.reveal('.about-us');
  // sr.reveal('.whyus');
  // sr.reveal('.portfolio');
  // sr.reveal('.contact');
  // sr.reveal('.mission');
  // sr.reveal('.testimony');
  // sr.reveal('.clients');
  // sr.reveal('.testimony1');

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
