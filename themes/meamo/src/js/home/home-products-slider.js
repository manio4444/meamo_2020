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
    prevArrow: '<span class="slick-prev">Previous</span>',
    nextArrow: '<span class="slick-next">Next</span>',
  });

});
