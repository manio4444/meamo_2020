import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'slick-carousel';


$(document).ready(function() {
  const $slider = $('.homepage-shop__products_list');

  $slider.slick({
    centerMode: true,
    centerPadding: 0,
    variableWidth:true,
    // arrows: false,
    mobileFirst: true,
    infinite: true,
    prevArrow: '<span class="slick-prev material-icons">keyboard_arrow_left</span>',
    nextArrow: '<span class="slick-next material-icons">keyboard_arrow_right</span>',
    rows: 0, // fix for not adding <div> wrapper inside slide's
  });

});
