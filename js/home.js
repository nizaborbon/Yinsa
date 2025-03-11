
  !(function($) {
  "use strict";

  $(window).scroll(function() {
  if (window.innerWidth >= 992) {
      if($(window).scrollTop() >= $("#hazlo-tu-mismo").offset().top) {
        $(".nav-menu > ul").css("display", "none");

        $("#img-n").css("display", "block");
        $("#img-n").css("max-height", "30px");
        $("#img-y").css("display", "none");

        $(".btn-sidebar").css("display", "block");
        $(".btn-sidebar i").css("color", "#2D2926");
        
        $("#header").css("background-color", "transparent");
      } else if($(window).scrollTop() >= $("#productos").offset().top) {
        $(".nav-menu > ul").css("display", "none");
        
        $("#img-n").css("display", "none");
        $("#img-y").css("display", "block");
       
        $(".btn-sidebar").css("display", "block");
        $(".btn-sidebar i").css("color", "#FFC72C");
        
        $("#header").css("background-color", "transparent");
      }  else if($(window).scrollTop() >= $("#nosotros").offset().top) {
        $(".nav-menu > ul").css("display", "none");
        
        $("#img-n").css("display", "block");
        $("#img-n").css("max-height", "30px");
        $("#img-y").css("display", "none");
        
        $(".btn-sidebar").css("display", "block");
        $(".btn-sidebar i").css("color", "#2D2926");
        
        $("#header").css("background-color", "transparent");
      } else if($(window).scrollTop() >= $("#portada").offset().top) {
        $(".nav-menu > ul").css("display", "flex");
        
        $("#img-n").css("display", "block");
        $("#img-n").css("max-height", "50px");
        
        $(".btn-sidebar").css("display", "none");
        
        $("#header").css("background-color", "rgba(255, 255, 255, 0.7)");
      }
    }
  });

  if (window.innerWidth <= 769) { 
  $(".hazlo-item").removeClass("item-right");
  $(".hazlo-item").removeClass("item-left");

  $(".hazlo-item").addClass("item-center");
  }




  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 21;
  if (window.matchMedia("(max-width: 991px)").matches) {
    scrolltoOffset += 20;
  }
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  var fullHeight = function() {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function(){
      $('.js-fullheight').css('height', $(window).height());
    });

  };
  fullHeight();

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });


  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#topbar').addClass('topbar-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#topbar').removeClass('topbar-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
    $('#topbar').addClass('topbar-scrolled');
  }





  // Intro carousel
  var portadaCarousel = $("#portadaCarousel");
  var portadaCarouselIndicators = $("#portada-carousel-indicators");
  portadaCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    portadaCarouselIndicators.append("<li data-target='#portadaCarousel' data-slide-to='" + index + "' class='active'></li>"):
      portadaCarouselIndicators.append("<li data-target='#portadaCarousel' data-slide-to='" + index + "'></li>");

  });

  portadaCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__adeInUp');
  });

  // Productos carousel
  var productosCarousel = $("#productosCarousel");
  var productosCarouselIndicators = $("#productos-carousel-indicators");
  productosCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    productosCarouselIndicators.append("<li data-target='#productosCarousel' data-slide-to='" + index + "' class='active'></li>"):
      productosCarouselIndicators.append("<li data-target='#productosCarousel' data-slide-to='" + index + "'></li>");

  });

  productosCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__adeInUp');
  });



  // carousel hazlo tu mismo
   var hazloCarousel = $("#hazloCarousel");
  var hazloCarouselIndicators = $("#hazlo-carousel-indicators");
  hazloCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    hazloCarouselIndicators.append("<li data-target='#hazloCarousel' data-slide-to='" + index + "' class='active'></li>"):
    hazloCarouselIndicators.append("<li data-target='#hazloCarousel' data-slide-to='" + index + "'></li>");

  });

  hazloCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__adeInUp');
  });

  // Podcast carousel
  var podcastCarousel = $("#podcastCarousel");
  var podcastCarouselIndicators = $("#podcast-carousel-indicators");
  podcastCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    podcastCarouselIndicators.append("<li data-target='#podcastCarousel' data-slide-to='" + index + "' class='active'></li>"):
      podcastCarouselIndicators.append("<li data-target='#podcastCarousel' data-slide-to='" + index + "'></li>");

  });

  podcastCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__adeInUp');
  });


  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

  })(jQuery);