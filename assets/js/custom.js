/* ========== Navigation mobile view js Strat ========== */ 
$(document).ready(function () {
  /* $("#sidebar").mCustomScrollbar({
       theme: "minimal"
   });*/
   $('#dismiss, .overlay').on('click', function () {
    $('#sidebar').removeClass('active');
    $('.inquirybox ').removeClass('openinquiry');
    $('#sidebarCollapse').removeClass('active');
    $('.overlay').fadeOut();
});

$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('.overlay').fadeIn();
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
});


      //Multiple Dropdown Click JS
      $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
          event.preventDefault();
          event.stopPropagation();

          $(this).siblings().toggleClass("show");
      
          if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
          }
          $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.submenu .show').removeClass("show");
          });
      });  

});



$(".clientslider").show();
$(".clientslider").slick({
     dots: false,
      arrows:true,
      infinite: false,
      slidesToShow: 4, 
      autoplay: false,
      slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
          slidesToShow: 4,
          arrows:false,
          slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        arrows:false,
          slidesToScroll: 1,
      }
    }
  ]
});

$(".testimonialslider").show();
$(".testimonialslider").slick({
     dots: false,
      arrows:true,
      infinite: true,
      slidesToShow: 1, 
      autoplay: false,
      slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1,
      }
    }
  ]
});
$(".coveredslider").show();
$(".coveredslider").slick({
     dots: false,
      arrows:true,
      infinite: true,
      slidesToShow: 4, 
      autoplay: true,
      slidesToScroll: 1,
      autoplaySpeed:2000,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
          arrows:false,
          slidesToScroll: 1,
      }
    },
    {
      breakpoint: 621,
      settings: {
        slidesToShow: 3,
        arrows:false,
          slidesToScroll: 1,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
        arrows:false,
          slidesToScroll: 1,
      }
    }
  ]
});
$(".awardsrecognitionslider").show();
$(".awardsrecognitionslider").slick({
     dots: false,
      arrows:true,
      infinite: true,
      slidesToShow: 3, 
      autoplay: true,
      slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
          slidesToScroll: 1,
      }
    },
       {
      breakpoint:840,
      settings: {
        slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false,
      }
    },
    {
      breakpoint: 621,
      settings: {
        slidesToShow: 2,
          slidesToScroll: 1,
           arrows:false,
      }
    },
    {
      breakpoint: 579,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1,
           arrows:false,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1,
           arrows:false,
      }
    }
  ]
});
$(".innerwhoweslider").show();
$(".innerwhoweslider").slick({
     dots: false,
      arrows:false,
      infinite: true,
      slidesToShow: 4, 
      autoplay: true,
      slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
          slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
          slidesToScroll: 1,
      }
    },
    {
      breakpoint: 421,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1,
      }
    }
  ]
});
$(".inneoverclientslider").show();
$(".inneoverclientslider").slick({
     dots: false,
      arrows:true,
      infinite: true,
      slidesToShow: 4, 
      autoplay: false,
      slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
          arrows:false,
          slidesToScroll: 1,
      }
    },
    {
      breakpoint: 621,
      settings: {
        slidesToShow: 3,
        arrows:false,
          slidesToScroll: 1,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
        arrows:false,
          slidesToScroll: 1,
      }
    }
  ]
});
$(".careerlistslider").show();
$(".careerlistslider").slick({
     dots: false,
      arrows:true,
      infinite: true,
      slidesToShow: 2, 
      autoplay: false,
      slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
          arrows:false,
          slidesToScroll: 1,
      }
    }
  ]
});
$(".teamcultureslider").show();
$(".teamcultureslider").slick({
     dots: false,
      arrows:true,
      infinite: true,
      centerMode: false,
      slidesToShow: 2, 
      autoplay: false,
      slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
          arrows:false,
          slidesToScroll: 1,
      }
    },
    {
      breakpoint: 621,
      settings: {
        slidesToShow: 1,
          arrows:false,
          slidesToScroll: 1,
      }
    }
  ]
});
$(".teamreviewslider").show();
$(".teamreviewslider").slick({
     dots: false,
      arrows:true,
      infinite: true,
      slidesToShow: 1, 
      autoplay: false,
      slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
          arrows:true,
          slidesToScroll: 1,
      }
    }
  ]
});

