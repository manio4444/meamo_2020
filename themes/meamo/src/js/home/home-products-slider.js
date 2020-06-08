import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'slick-carousel';


$(document).ready(function() {

  $('.home_products_list').slick({
    centerMode: true,
    centerPadding: 0,
    variableWidth:true,
    // arrows: false,
    mobileFirst: true,
    infinite: true,
    prevArrow: '<span class="slick-prev material-icons">keyboard_arrow_left</span>',
    nextArrow: '<span class="slick-next material-icons">keyboard_arrow_right</span>',
  });

});
