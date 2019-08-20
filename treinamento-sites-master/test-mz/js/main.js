//Busca
$(function (popup) {
    $('.header_brand_search').click(function () {
      $('.search-popup').addClass("linear");
      // $('.content-around').toggleClass('active');
    })
  
    $('.search-popup_close').click(function () {
      $('.search-popup').removeClass('active').fadeToggle("linear");
      // $('.content-around').removeClass('active');
    })
    return (popup);
  })

  function menuMobile() {
    const btnMenuMobile = document.querySelector('.header_navigation_menu-mobile');
    const navMenuEl = document.querySelector('.header_navigation nav ul');
    const show = 'show';
  
  }
  menuMobile()
  
  $(function () {
    $('.header_navigation_menu-mobile').click(function () {
      $('.bar').toggleClass('hidden');
      $('.close').toggleClass('hidden');
    })
  })