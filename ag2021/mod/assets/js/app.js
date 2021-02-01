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
      self.filterWorks();
      self.header();
      self.swiperSlider();

    },

    scroll: function(){
      // gsap.registerPlugin(ScrollTrigger);
      // var frame_count  = 10,
      //   offset_value = 500;

      // gsap.to(".viewer", {
      //   backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
      //   ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
      //   scrollTrigger: {
      //     trigger: ".main",
      //     start: "top top",
      //     end: "+=" + (frame_count * offset_value),
      //     // pin: true,
      //     scrub: true
      //   }
      // });

      // const sections = document.querySelectorAll('main .trigger section');
      // const sectionsTarget = document.querySelectorAll('main .cover section');

      // sections.forEach((section, index) => {
      //   ScrollTrigger.create({
      //     trigger: section,
      //     id: index+1,
      //     start: 'top center',
      //     end: () => `+=${section.clientHeight + 30}`,
      //     toggleActions: 'play reverse none reverse',
      //     toggleClass: {targets: section, className: "active"},
      //     // markers: true
      //   });
        
      // });

      // ScrollTrigger.create({
      //   trigger: "#section0",
      //   start: 'top center',
      //   toggleActions: 'play reverse none reverse',
      //   toggleClass: {targets: ".front-welcome", className: "active"},
      //   // markers: true
      // });

      var scale = 1;

      var fadeTime = 150;

      var xxshortwhile = 200;
      var xshortwhile = 300;
      var shortwhile = 600;
      var mediumwhile = 900;
      var largewhile = 1200;
      var xlargewhile = 1500;
      var xxlargewhile = 1800;
      var xxxlargewhile = 2500;

      //////////////////////////////////////////////// COVER

      var scenecover = 0;
      var scenecover1 = scenecover + fadeTime;
      var scenecover2 = scenecover1 + shortwhile;
      var scenecoverend = scenecover2 + largewhile;

      //////////////////////////////////////////////// JAN

      var scene1start = scenecover2;
      var scene1fade = scene1start + xshortwhile;
      var scene1scrollstart = scene1fade + shortwhile;
      var scene1zoom = scene1scrollstart + shortwhile;
      var scene1zoom2 = scene1zoom + shortwhile;
      var scene1scrollend = scene1zoom2 + shortwhile;
      var scene1end = scene1scrollend + shortwhile;

      //////////////////////////////////////////////// FEB

      var scene2start = scene1zoom2 + xxshortwhile;
      var scene2fade = scene2start + xshortwhile;
      var scene2scrollstart = scene2fade + xshortwhile;
      var scene2zoom = scene2scrollstart + xshortwhile;
      var scene2zoom2 = scene2zoom + xshortwhile;
      var scene2scrollend = scene2zoom2 + xshortwhile;
      var scene2end = scene2scrollend + xshortwhile;

      //////////////////////////////////////////////// MAR

      var scene3start = scene2zoom2 + xxshortwhile;
      var scene3fade = scene3start + shortwhile;
      var scene3scrollstart = scene3fade + shortwhile;
      var scene3zoom = scene3scrollstart + shortwhile;
      var scene3zoom2 = scene3zoom + shortwhile;
      var scene3scrollend = scene3zoom2 + shortwhile;
      var scene3end = scene3scrollend + shortwhile;

      //////////////////////////////////////////////// APR

      var scene4start = scene3zoom2 + xxshortwhile;
      var scene4fade = scene4start + xshortwhile;
      var scene4scrollstart = scene4fade + xshortwhile;
      var scene4zoom = scene4scrollstart + xshortwhile;
      var scene4zoom2 = scene4zoom + xshortwhile;
      var scene4scrollend = scene4zoom2 + xshortwhile;
      var scene4end = scene4scrollend + xshortwhile;

      //////////////////////////////////////////////// MEI

      var scene5start = scene4zoom2 + xxshortwhile;
      var scene5fade = scene5start + shortwhile;
      var scene5scrollstart = scene5fade + shortwhile;
      var scene5zoom = scene5scrollstart + shortwhile;
      var scene5zoom2 = scene5zoom + shortwhile;
      var scene5scrollend = scene5zoom2 + shortwhile;
      var scene5end = scene5scrollend + shortwhile;

      //////////////////////////////////////////////// JUN

      var scene6start = scene5zoom2 + xxshortwhile;
      var scene6fade = scene6start + xshortwhile;
      var scene6scrollstart = scene6fade + xshortwhile;
      var scene6zoom = scene6scrollstart + xshortwhile;
      var scene6zoom2 = scene6zoom + xshortwhile;
      var scene6scrollend = scene6zoom2 + xshortwhile;
      var scene6end = scene6scrollend + xshortwhile;

      //////////////////////////////////////////////// JUL

      var scene7start = scene6zoom2 + xxshortwhile;
      var scene7fade = scene7start + xshortwhile;
      var scene7scrollstart = scene7fade + shortwhile;
      var scene7zoom = scene7scrollstart + shortwhile;
      var scene7zoom2 = scene7zoom + shortwhile;
      var scene7scrollend = scene7zoom2 + shortwhile;
      var scene7end = scene7scrollend + shortwhile;

      //////////////////////////////////////////////// AGS

      var scene8start = scene7zoom2 + xxshortwhile;
      var scene8fade = scene8start + xshortwhile;
      var scene8scrollstart = scene8fade + xshortwhile;
      var scene8zoom = scene8scrollstart + xshortwhile;
      var scene8zoom2 = scene8zoom + xshortwhile;
      var scene8scrollend = scene8zoom2 + xshortwhile;
      var scene8end = scene8scrollend + xshortwhile;

      //////////////////////////////////////////////// SEP

      var scene9start = scene8zoom2 + xxshortwhile;
      var scene9fade = scene9start + shortwhile;
      var scene9scrollstart = scene9fade + shortwhile;
      var scene9zoom = scene9scrollstart + shortwhile;
      var scene9zoom2 = scene9zoom + shortwhile;
      var scene9scrollend = scene9zoom2 + shortwhile;
      var scene9end = scene9scrollend + shortwhile;

      //////////////////////////////////////////////// OKT

      var scene10start = scene9zoom2 + xxshortwhile;
      var scene10fade = scene10start + shortwhile;
      var scene10scrollstart = scene10fade + shortwhile;
      var scene10zoom = scene10scrollstart + shortwhile;
      var scene10zoom2 = scene10zoom + shortwhile;
      var scene10scrollend = scene10zoom2 + shortwhile;
      var scene10end = scene10scrollend + shortwhile;

      //////////////////////////////////////////////// NOV

      var scene11start = scene10zoom + xxshortwhile;
      var scene11fade = scene11start + xshortwhile;
      var scene11scrollstart = scene11fade + xshortwhile;
      var scene11zoom = scene11scrollstart + xshortwhile;
      var scene11zoom2 = scene11zoom + xshortwhile;
      var scene11scrollend = scene11zoom2 + xxshortwhile;
      var scene11end = scene11scrollend + xxshortwhile;

      //////////////////////////////////////////////// DES

      var scene12start = scene11zoom2 + xxshortwhile;
      var scene12fade = scene12start + xshortwhile;
      var scene12scrollstart = scene12fade + shortwhile;
      var scene12zoom = scene12scrollstart + shortwhile;
      var scene12zoom2 = scene12zoom + shortwhile;
      var scene12scrollend = scene12zoom2 + shortwhile;
      var scene12end = scene12scrollend + shortwhile;

      //////////////////////////////////////////////// END

      var scenelast = scene11end + 400;
      var scenelast1 = scenelast + xshortwhile;
      var scenelastend = scenelast1;

      var scenes = {

          scenecover: scenecover,
          scenecover1: scenecover1,
          scenecover2: scenecover2,
          scenecoverend: scenecoverend,

          scene1start: scene1start,
          scene1fade: scene1fade,
          scene1scrollstart: scene1scrollstart,
          scene1zoom: scene1zoom,
          scene1zoom2: scene1zoom2,
          scene1scrollend: scene1scrollend,
          scene1end: scene1end,

          scene2start: scene2start,
          scene2fade: scene2fade,
          scene2scrollstart: scene2scrollstart,
          scene2zoom: scene2zoom,
          scene2zoom2: scene2zoom2,
          scene2scrollend: scene2scrollend,
          scene2end: scene2end,

          scene3start: scene3start,
          scene3fade: scene3fade,
          scene3scrollstart: scene3scrollstart,
          scene3zoom: scene3zoom,
          scene3zoom2: scene3zoom2,
          scene3scrollend: scene3scrollend,
          scene3end: scene3end,

          scene4start: scene4start,
          scene4fade: scene4fade,
          scene4scrollstart: scene4scrollstart,
          scene4zoom: scene4zoom,
          scene4zoom2: scene4zoom2,
          scene4scrollend: scene4scrollend,
          scene4end: scene4end,

          scene5start: scene5start,
          scene5fade: scene5fade,
          scene5scrollstart: scene5scrollstart,
          scene5zoom: scene5zoom,
          scene5zoom2: scene5zoom2,
          scene5scrollend: scene5scrollend,
          scene5end: scene5end,

          scene6start: scene6start,
          scene6fade: scene6fade,
          scene6scrollstart: scene6scrollstart,
          scene6zoom: scene6zoom,
          scene6zoom2: scene6zoom2,
          scene6scrollend: scene6scrollend,
          scene6end: scene6end,

          scene7start: scene7start,
          scene7fade: scene7fade,
          scene7scrollstart: scene7scrollstart,
          scene7zoom: scene7zoom,
          scene7zoom2: scene7zoom2,
          scene7scrollend: scene7scrollend,
          scene7end: scene7end,

          scene8start: scene8start,
          scene8fade: scene8fade,
          scene8scrollstart: scene8scrollstart,
          scene8zoom: scene8zoom,
          scene8zoom2: scene8zoom2,
          scene8scrollend: scene8scrollend,
          scene8end: scene8end,

          scene9start: scene9start,
          scene9fade: scene9fade,
          scene9scrollstart: scene9scrollstart,
          scene9zoom: scene9zoom,
          scene9zoom2: scene9zoom2,
          scene9scrollend: scene9scrollend,
          scene9end: scene9end,

          scene10start: scene10start,
          scene10fade: scene10fade,
          scene10scrollstart: scene10scrollstart,
          scene10zoom: scene10zoom,
          // scene10zoom2: scene10zoom2,
          // scene10scrollend: scene10scrollend,
          // scene10end: scene10end,

          scene11start: scene11start,
          scene11fade: scene11fade,
          scene11scrollstart: scene11scrollstart,
          scene11zoom: scene11zoom,
          scene11zoom2: scene11zoom2,
          scene11scrollend: scene11scrollend,
          scene11end: scene11end,

          scene12start: scene12start,
          scene12fade: scene12fade,
          scene12scrollstart: scene12scrollstart,
          // scene12zoom: scene12zoom,
          // scene12zoom2: scene12zoom2,
          // scene12scrollend: scene12scrollend,
          // scene12end: scene12end,

          // scenelast: scenelast,
          // scenelast1: scenelast1,
          // scenelastend: scenelastend

      };


      const mediaQuery = window.matchMedia('(max-width: 426px)');
      mediaQuery.addListener(handleDeviceChange);
      function handleDeviceChange(e) {
        if (!e.matches){
          skrollr.init({
            smoothScrolling: true,
            smoothScrollingDuration: 400,
            forceHeight: true,
            edgeStrategy: 'ease',
            constants: scenes,
            scale: scale,
            mobileDeceleration: 0.004,
            interruptible: false,
            easing: 'sqrt'
          });
          $("meta[name='viewport']").attr("content", "user-scalable = no, maximum-scale=1.0");
        }
      }
      
      handleDeviceChange(mediaQuery);

    },

    filterWorks: function () {
      var $grid = $('.list-works').isotope({
        itemSelector: '.works-card',
        layoutMode: 'fitRows'
      });
      // filter functions
      var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
          var number = $(this).find('.number').text();
          return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
          var name = $(this).find('.name').text();
          return name.match( /ium$/ );
        }
      };
      // bind filter button click
      $('.filter-area').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
      });
      // change is-checked class on buttons
      $('.filter-area').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });
    },

    header: function () {
      
      $('#headerActionMenuBurger').click(function () {
        $("#menuMobilePopup").toggleClass('active');
        $('.menu-burger').toggleClass('menu-burger--active');
        $("body").toggleClass('hidden');
        $(".backdrop").toggleClass('backdrop--hide');
      });

      $('#triggerServices').click(function () {
        $("#menuServicesPopup").addClass('active');
        $("body").addClass('hidden');
        $(".backdrop").removeClass('backdrop--hide');
      });
      $('#triggerContact').click(function () {
        $("#menuContactPopup").addClass('active');
        $("body").addClass('hidden');
        $(".backdrop").removeClass('backdrop--hide');
      });
      $('#triggerWorks').click(function () {
        $("#menuWorksPopup").addClass('active');
        $("body").addClass('hidden');
        $(".backdrop").removeClass('backdrop--hide');
      });
      $('#backdrop').click(function () {
        $(".menu-content").removeClass('active');
        $("body").removeClass('hidden');
        $(".backdrop").addClass('backdrop--hide');
      });
      $('.menu-content__close').click(function () {
        $('.menu-burger').removeClass('menu-burger--active');
        $(".menu-content").removeClass('active');
        $("body").removeClass('hidden');
        $(".backdrop").addClass('backdrop--hide');
      });
    },

    swiperSlider: function () {
      if ($('.slider-vespa').length) {
        var slidervespa = new Swiper('.slider-vespa .swiper-container', {
          slidesPerView: 1,
          spaceBetween: 5,
          pagination: {
            el: '.slider-vespa .swiper-pagination',
            clickable: true,
          },
        });
        var slidervespa2 = new Swiper('.slider-vespa2 .swiper-container', {
          slidesPerView: 1,
          spaceBetween: 5,
          pagination: {
            el: '.slider-vespa2 .swiper-pagination',
            clickable: true,
          },
        });
      }
      if ($('.slider-toyota').length) {
        var slidertoyota = new Swiper('.slider-toyota .swiper-container', {
          slidesPerView: 1,
          spaceBetween: 5,
          pagination: {
            el: '.slider-toyota .swiper-pagination',
            clickable: true,
          },
        });
        var slidertoyota2 = new Swiper('.slider-toyota2 .swiper-container', {
          slidesPerView: 1,
          spaceBetween: 5,
          pagination: {
            el: '.slider-toyota2 .swiper-pagination',
            clickable: true,
          },
        });
      }
      if ($('.slider-virtualspace').length) {
        var slidervirtualspace = new Swiper('.slider-virtualspace .swiper-container', {
          slidesPerView: 1,
          spaceBetween: 5,
          pagination: {
            el: '.slider-virtualspace .swiper-pagination',
            clickable: true,
          },
        });
      }
      if ($('.slider-dpr').length) {
        var sliderdpr = new Swiper('.slider-dpr .swiper-container', {
          slidesPerView: 1,
          spaceBetween: 5,
          pagination: {
            el: '.slider-dpr .swiper-pagination',
            clickable: true,
          },
        });
      }

      $('.popup').click(function () {
        $(this).toggleClass("active");
      });

    }
  };

  $(document).ready(function () {
    global_functions.init();

    
  });
  

})(jQuery);

$(function() {
  
  $.attractHover(
    '.magnet',
    {
      proximity: 100,
      magnetism: 10
    }
  );
  
});