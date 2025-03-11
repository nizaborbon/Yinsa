$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    /*items: 2,*/
    margin: 20,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    rtl: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 2
      }
    }
  });

  // Agregar la clase 'active-big' al primer elemento
  $('.owl-item').eq(0).find('.item').addClass('active-big');

  $('.owl-carousel').on('changed.owl.carousel', function(event) {
    var current = event.item.index;
    var owlItems = $('.owl-item');
    var vItems = $('.item');
    owlItems.removeClass('active-big');
    vItems.removeClass('active-b');
    owlItems.eq(current).addClass('active-big');
  });

  $('.owl-prev').on('click', function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });

  $('.owl-next').on('click', function() {
    $('.owl-carousel').trigger('next.owl.carousel');
  });
});