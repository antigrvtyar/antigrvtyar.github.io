(function ($) {

  'use strict';

  var $html = $('html');

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  var global_functions = {
    init: function () {
      var self = this;

      self.scroll();
      self.conceptContent();
      self.datePickerForm();
      self.appendCheck();
      self.header();
      self.swiperSlider();

    },

    scroll: function(){
      gsap.registerPlugin(ScrollTrigger);

      var locoScroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"),
        smooth: true
      });
      locoScroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(".smooth-scroll", {
        scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
      });

      //Section Nav
      if ($('#sectionNavHome').length) {
        $('.section-navigation nav a').click(function () {
          var secnavlinkdata = $(this).data("nav");
          var secnavlinkto = document.querySelector(secnavlinkdata);
          locoScroll.scrollTo(secnavlinkto);
        });
        gsap.to(".section-navigation nav a:nth-child(1)", {
          scrollTrigger: {
            trigger: "#sectionWelcomeNavTrigger",
            endTrigger: "#sectionConceptNavTrigger",
            scroller: ".smooth-scroll",
            toggleClass: {targets: ".section-navigation nav a:nth-child(1)", className: "active"},
            // markers: true
          },
        });
        gsap.to(".section-navigation nav a:nth-child(2)", {
          scrollTrigger: {
            trigger:"#sectionRoomNavTrigger",
            endTrigger: "#sectionRoomNavTrigger",
            scroller:".smooth-scroll",
            toggleClass: {targets: ".section-navigation nav a:nth-child(2)", className: "active"},
            // markers: true
          }
        });
        gsap.to(".section-navigation nav a:nth-child(3)", {
          scrollTrigger: {
            trigger:"#sectionPackageNavTrigger",
            endTrigger: "#sectionPackageNavTrigger",
            scroller:".smooth-scroll",
            toggleClass: {targets: ".section-navigation nav a:nth-child(3)", className: "active"},
            // markers: true
          }
        });
        gsap.to(".section-navigation nav a:nth-child(4)", {
          scrollTrigger: {
            trigger:"#sectionSocialNavTrigger",
            endTrigger: "#sectionSocialNavTrigger",
            scroller:".smooth-scroll",
            toggleClass: {targets: ".section-navigation nav a:nth-child(4)", className: "active"},
            // markers: true
          }
        });
        gsap.to(".section-navigation nav a:nth-child(5)", {
          scrollTrigger: {
            trigger:"#sectionReviewsNavTrigger",
            endTrigger: "#sectionReviewsNavTrigger",
            scroller:".smooth-scroll",
            toggleClass: {targets: ".section-navigation nav a:nth-child(5)", className: "active"},
            // markers: true
          }
        });
        gsap.to(".section-navigation nav a:nth-child(6)", {
          scrollTrigger: {
            trigger:"#sectionClientNavTrigger",
            endTrigger: "#sectionFooterNavTrigger",
            scroller:".smooth-scroll",
            toggleClass: {targets: ".section-navigation nav a:nth-child(6)", className: "active"},
            // markers: true
          }
        });
      }

      //Header
      gsap.to(".header", {
        scrollTrigger: {
          trigger: ".header-scroll-trigger",
          scroller: ".smooth-scroll",
          toggleClass: {targets: ".header", className: "header--active"},
          // markers: true
        },
      });

      //Go top
      var topsection = document.querySelector('.topsection');
      $('#goTop').click(function () {
        locoScroll.scrollTo(topsection);
      });


      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();


      //Room Filter
      this.roomFilter(locoScroll);
      
      
    },

    roomFilter: function(locoScroll){

      var $grid = $('.filter-roomlist').isotope({
        itemSelector: '.filter-roomlist__object'
      });

      var filters = {};

      $('.filter-room').on( 'change', function( event ) {
        var $select = $( event.target );
        var filterGroup = $select.attr('value-group');
        filters[ filterGroup ] = event.target.value;
        var filterValue = concatValues( filters );
        $grid.isotope({ filter: filterValue });

        locoScroll.update();
      });

      function concatValues( obj ) {
        var value = '';
        for ( var prop in obj ) {
          value += obj[ prop ];
        }
        return value;
      }

    },

    conceptContent: function(){
      $('.conceptPopupArea .concept-back a, .conceptPopupArea .concept-front a').click(function (e) {
        // console.log($(this).data("cpop"));
        var conceptPopupDesc = $(this).data("cpop").desc;
        var conceptPopupLink = $(this).data("cpop").link;
        var conceptPopupImage = $(this).data("cpop").image;
        
        $('.concept-popup').addClass('active');
        $('.concept-popup .concept-popup__text p').html(conceptPopupDesc);
        $('.concept-popup .concept-popup__text a').attr("href", conceptPopupLink);
        $('.concept-popup__content').css("background-image", 'url("'+ conceptPopupImage +'")');
      });

      $('.conceptPopupArea .concept-popup .concept-popup__close').click(function () {
        $('.concept-popup').removeClass('active');
      });
      $('.conceptPopupArea .concept-popup').after().click(function () {
        $('.concept-popup').removeClass('active');
      });
    },

    datePickerForm: function(){
      const elem = document.getElementById('rangeDate');
      const datepicker = new DateRangePicker(elem, {
        format: 'dd MM yyyy',
        disableTouchKeyboard: true
      }); 

      $('.add').click(function () {
        if ($(this).prev().val() < 10) {
          $(this).prev().val(+$(this).prev().val() + 1);
        }
      });
      $('.sub').click(function () {
          if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
          }
      });
    },

    appendCheck: function(){
      const mediaQuery = window.matchMedia('(min-width: 1025px)');
      mediaQuery.addListener(handleDeviceChange);
      function handleDeviceChange(e) {
        if (!e.matches){
          $(".menu-list-move-object").appendTo(".menu-list-move");
        }
      }
      
      // Run it initially
      handleDeviceChange(mediaQuery);
    },

    header: function () {
      $('#headerActionMenu').click(function () {
        $('.header-action__burger').addClass('header-action__burger--active');
        $('#menubig').addClass('menu-big--active');
      });
      $('#headerActionSearch').click(function () {
        $('#menusearch').addClass('menu-big--active');
      });
      
      $('#headerActionMenuBurger').click(function () {
        $('.menu-burger').toggleClass('menu-burger--active');
        $('#menubig').toggleClass('menu-big--active');
      });
      $('#headerActionCloseMenuBig').click(function () {
        $('#menubig').removeClass('menu-big--active');
        $('.header-action__burger').removeClass('header-action__burger--active');
      });
      $('#headerActionCloseMenuSearch').click(function () {
        $('#menusearch').removeClass('menu-big--active');
      });


      $('#triggerReserveForm').click(function () {
        $(this).addClass('reserve-form--active');
        $(".reserve-form-content").addClass('reserve-form-content--active');
        // $(".backdrop").removeClass('backdrop--hide');
      });
      $('#triggerCloseReserveForm').click(function () {
        $(".reserve-form").removeClass('reserve-form--active');
        $(".reserve-form-content").removeClass('reserve-form-content--active');
        // $(".backdrop").addClass('backdrop--hide');
      });
    },

    swiperSlider: function () {
      if ($('.slider-testimonial').length) {
        var sliderTestimonial = new Swiper('.slider-testimonial .swiper-container', {
          pagination: {
            el: '.slider-testimonial .swiper-pagination',
            clickable: true,
          },
        });
      }

      if ($('.slider-concept').length) {
        var sliderConcept = new Swiper('.slider-concept .swiper-container', {
          slidesPerView: 'auto',
          spaceBetween: 28,
          centeredSlides: true,
        });
      }

      if ($('.slider-package').length) {
        var sliderPackage = new Swiper('.slider-package .swiper-container', {
          slidesPerView: 'auto',
          spaceBetween: 60,
          centeredSlides: false,
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 'auto',
              spaceBetween: 60,
            },
          }
        });
      }

      if ($('.slider-social').length) {
        var sliderSocial = new Swiper('.slider-social .swiper-container', {
          slidesPerView: 'auto',
          spaceBetween: 50,
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 'auto',
              spaceBetween: 50,
            },
          }
        });
      }

      if ($('.slider-room-detail').length) {
        var sliderRoomDetail = new Swiper('.slider-room-detail .swiper-container', {
          slidesPerView: 'auto',
          spaceBetween: 20,
          centeredSlides: true,
          pagination: {
            el: '.slider-room-detail .swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 'auto',
              spaceBetween: 20,
              centeredSlides: false,
            },
            325: {
              centeredSlides: true,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 'auto',
              spaceBetween: 20,
            },
          }
        });

        var sliderRoomPopup = new Swiper('.slider-room-popup .swiper-container', {
          slidesPerView: 1,
          spaceBetween: 5,
          centeredSlides: true,
          navigation: {
            nextEl: '.slider-room-popup .swiper-button-next',
            prevEl: '.slider-room-popup .swiper-button-prev',
          },
        });
        // sliderRoomDetail.slideTo(1);
        // sliderRoomPopup.slideTo(1);

        $('.slider-room-detail .swiper-slide').click(function () {
          var indexSlide = $(this).data("slide");
          sliderRoomPopup.slideTo(indexSlide);

          $('.room-slider__front').addClass("active");
          $('main').addClass("popup-active");
        });
        $('.slider-room-popup__close').click(function () {
          $('.room-slider__front').removeClass("active");
          $('main').removeClass("popup-active");
        });
        $('.room-slider__front').after().click(function () {
          $('.room-slider__front').removeClass("active");
          $('main').removeClass("popup-active");
        });
        
      }

      if ($('.slider-amenities').length) {
        var sliderAmenities = new Swiper('.slider-amenities .swiper-container', {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 15,
          pagination: {
            el: '.slider-amenities .swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 'auto',
              slidesPerColumn: 1,
              spaceBetween: 15,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 'auto',
              slidesPerColumn: 1,
              spaceBetween: 15,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 4,
              slidesPerColumn: 2,
              spaceBetween: 15,
            },
          }
        });
      }

    }
  };

  $(document).ready(function () {
    global_functions.init();

    
  });
  

})(jQuery);

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


