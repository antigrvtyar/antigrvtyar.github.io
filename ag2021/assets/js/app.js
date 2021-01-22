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
      gsap.registerPlugin(ScrollTrigger);

      const sections = document.querySelectorAll('main .trigger section');
      const sectionsTarget = document.querySelectorAll('main .cover section');

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          id: index+1,
          start: 'top center',
          end: () => `+=${section.clientHeight + 30}`,
          toggleActions: 'play reverse none reverse',
          toggleClass: {targets: section, className: "active"},
          // markers: true
        });
        
      });

      ScrollTrigger.create({
        trigger: "#section0",
        start: 'top center',
        toggleActions: 'play reverse none reverse',
        toggleClass: {targets: ".front-welcome", className: "active"},
        // markers: true
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