import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'slick-carousel';


$(document).ready(function() {
  const $sliderBig = $('.meamo-product__slider-big ul');
  const $sliderSmall = $('.meamo-product__slider-small ul');

  $sliderBig.slick({
    // centerMode: true,
    // centerPadding: 0,
    // variableWidth: true,
    prevArrow: '<span class="slick-prev material-icons">keyboard_arrow_left</span>',
    nextArrow: '<span class="slick-next material-icons">keyboard_arrow_right</span>',
    rows: 0, // fix for not adding <div> wrapper inside slide's
    asNavFor: $sliderSmall,
  });

  $sliderSmall.slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    // prevArrow: '<span class="slick-prev material-icons">keyboard_arrow_left</span>',
    // nextArrow: '<span class="slick-next material-icons">keyboard_arrow_right</span>',
    rows: 0, // fix for not adding <div> wrapper inside slide's
    asNavFor: $sliderBig,
  });

  $sliderSmall.find('.slick-slide').on('click', function (event) {
    $sliderBig.slick('slickGoTo', $(this).data('slickIndex'));
  });

});
