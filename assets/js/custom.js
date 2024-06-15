/*-----------------------------------------------------------------------------------

    Template Name: Cleanio - Laundry And Cleaning

    Note: This is Custom Js file

-----------------------------------------------------------------------------------

    [Table of contents]

    01. slider-home-1
    02. service-slider
    03. logodata
    04. client-slider
    05. slider-for
    06. mobile-nav
    07. count
    08. overlay
    09. accordion-item
    10. scrollTop
    11. Preloader

-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($){
    if ( $.isFunction($.fn.owlCarousel) ) {
    /* 01. slider-home-1 */
    $('.slider-home-1').owlCarousel({
        loop:true,
        arrows:false,
        dot:true,
        autoplay:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        mouseDrag:false,
        items:1
      })
    /* 02. service-slider */
        $('.service-slider').owlCarousel({
        loop:true,
        dot:true,
        nav:true,
        autoplay:true,
        navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1360:{
                items:3
            }
          }
        })
    /* 03. logodata */
        $('.logodata').owlCarousel({
        loop:true,
        dot:false,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:5
        },
        1400:{
            items:6
        }
      }
    })
    /* 04. client-slider */
    $('.client-slider').owlCarousel({
        loop:true,
        dot:true,
        arrows:false,
        autoplay:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayTimeout:4000,
        items:1
      })
    }
    /* 05. slider-for */
    if ( $.isFunction($.fn.slick) ) {
              $('.slider-for').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  fade: true,
                  asNavFor: '.slider-nav'
                });
                $('.slider-nav').slick({
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  asNavFor: '.slider-for',
                  dots: true,
                  arrows:false,
                  centerMode: false,
                  focusOnSelect: true,
                  responsive: [
                            {
                              breakpoint: 993,
                              settings: {
                                slidesToShow: 3,
                              }
                            },
                            {
                              breakpoint: 576,
                              settings: {
                                slidesToShow: 2,
                              }
                            },
                            {
                              breakpoint: 480,
                              settings: {
                                slidesToShow: 1,
                              }
                            }
                          ]
                });
            }
    /* 06. mobile-nav */
  jQuery('.mobile-nav .menu-item-has-children').on('click', function($) {

          jQuery(this).toggleClass('active');

        }); 

        jQuery('#nav-icon4').click(function($){

            jQuery('#mobile-nav').toggleClass('open');

        });

        jQuery('#res-cross').click(function($){

           jQuery('#mobile-nav').removeClass('open');

        });


        jQuery('.bar-menu').click(function($){

            jQuery('#mobile-nav').toggleClass('open');
            jQuery('#mobile-nav').toggleClass('hmburger-menu');
            jQuery('#mobile-nav').show();

        });

        jQuery('#res-cross').click(function($){

           jQuery('#mobile-nav').removeClass('open');

        });
  }) ;

/* 07. count */
let count = document.querySelectorAll(".count");
let arr = Array.from(count);

arr.map(function (item) {
  let startnumber = 0;

  function counterup() {
    startnumber++;
    item.innerHTML = startnumber;

    if (startnumber == item.dataset.number) {
      clearInterval(stop);
    }
  }
  let stop = setInterval(function () {
    counterup();
  }, 10);
});

// count end


/* 08. overlay */
        var boxWidth = $("#lightbox").width();
                $(".white_content").animate({
                    opacity: 0,
                    width:0,
                    left : -10000
            });
            $("#close").on('click',function(){ 
            $(".white_content").animate({
                opacity: 0,
                width:0,
                left : -1000
            });
            });
            $("#show").on('click',function(){ 
            $(".white_content").animate({
                opacity: 1,
                width:500,
                left :0
            });
            $("#overlay").animate({
                opacity: 1,
                width:boxWidth,
                left :0
            });

        });


/* 09. accordion-item */

$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    if($(this).closest('.accordion-item').hasClass('active')) {
        $('.accordion-item').removeClass('active');
    } else {
        $('.accordion-item').removeClass('active');

        $(this).closest('.accordion-item').addClass('active');
    }
    var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .content').not($content).slideUp('fast');
});

// end

/* 10. scrollTop */

function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      //duration 5 seconds
      duration: 5000,
      easing: 'linear',
      step: function() {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function() {
        element.html(this.countNum + html);
      }
    });
  }

}

//When the document is ready
$(function() {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function() {
    //Checking if each items to animate are 
    //visible in the viewport
    $("h2[data-max]").each(function() {
      inVisible($(this));
    });
  })
});




let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#8cc63f ${scrollValue}%, #fff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// end


/* 11. Preloader */ 
        $(window).on('load', function () {
            $("body").addClass("page-loaded");
            ("loaded")
        });

// end
/* 17. Click to close lightbox */
          $('.close, .backdrop').on('click',function(){ 
            $('.backdrop').

            animate({'opacity':'0'}, 300, 'linear', function(){
              $('.backdrop').css('display', 'none');
            });
            $('.box').fadeOut();
          });

$('.lightbox-toggle').on('click',function(){ 
            $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
            $('.box').fadeIn();
          });