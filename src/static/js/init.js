$(document).ready(function(){
  //fancybox
  $('.js-zoom').fancybox({
    buttons : [ 
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'download',
      'close'
    ],
    backFocus : false,
    infobar: true,
      caption : function( instance, item ) {
        return $(this).next('figcaption').html();
      }
  }); 
  
  //hero slider
  var heroSlider = new Swiper('#js-hero-slider', {});
  
  //gallerys sliders
  function addPrefNull(numb){
    if(+numb < 10){
      return '0' + numb;
    } else{
      return numb;
    }
  }
  let gallerysSliders1 = new Swiper('.js-gallery-1', {
    pagination: {
      el: '.js-gallery-progress-1',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.js-gallery-next-1',
      prevEl: '.js-gallery-prev-1',
    },
  });
  let gallerysSliders2 = new Swiper('.js-gallery-2', {
    pagination: {
      el: '.js-gallery-progress-2',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.js-gallery-next-2',
      prevEl: '.js-gallery-prev-2',
    },
  });
  
  let gallery1AllSlides = document.querySelector('.js-gallery-leng-1');
  let gallery2AllSlides = document.querySelector('.js-gallery-leng-2');
  let gallery1CurrentSlide = document.querySelector('.js-gallery-current-1');
  let gallery2CurrentSlide = document.querySelector('.js-gallery-current-2');
  gallery1AllSlides.innerHTML = addPrefNull(gallerysSliders1.slides.length);
  gallery2AllSlides.innerHTML = addPrefNull(gallerysSliders2.slides.length);
  gallerysSliders1.on('slideChange',  function() {
    let currentSlide = ++gallerysSliders1.realIndex;
    gallery1CurrentSlide.innerHTML = addPrefNull(currentSlide);
  });
  gallerysSliders2.on('slideChange',  function() {
    let currentSlide = ++gallerysSliders2.realIndex;
    gallery2CurrentSlide.innerHTML = addPrefNull(currentSlide);
  });
  
  //docs slider
  let docsCarusel = new Swiper('#js-docs', {
    spaceBetween: 24,
    slidesPerView: 1,
    navigation: {
      nextEl: '.js-docs-next',
      prevEl: '.js-docs-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    }
  });
  
  //partners slider
  let partnersCarusel = new Swiper('#js-partners-carusel', {
    slidesPerView: 2,
    navigation: {
      nextEl: '.js-partners-next',
      prevEl: '.js-partners-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 5,
      },
    }
  });
  
  //smi slider
  let smiCarusel = new Swiper('#js-smi-carusel', {
    slidesPerView: 1,
    grid: {
      rows: 2,
    },
    navigation: {
      nextEl: '.js-smi-next',
      prevEl: '.js-smi-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        grid: {
          rows: 1,
        },
      },
    }
  });
  
  //detail gallery
  let galleryCarusel = new Swiper('#js-desc-gallery-carusel', {
    spaceBetween: 17,
    slidesPerView: 4,
    watchSlidesProgress: true,
  });
  let gallerySlider = new Swiper('#js-desc-gallery-slider', {
    navigation: {
      nextEl: '.js-desc-gallery-next',
      prevEl: '.js-desc-gallery-prev',
    },
    thumbs: {
      swiper: galleryCarusel,
    },
  });
  
});