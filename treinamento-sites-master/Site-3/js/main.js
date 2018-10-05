$(document).ready(function () {
    $('.menu-btn-mobile').click(function (e) { 
        $('.menu-ul').toggle('.menu-btn-mobile');
    });
     
    //carolsel
    var owl = $("#owl-demo");
    
    owl.owlCarousel ({
        items: 11,
        nav : true
    });
});
