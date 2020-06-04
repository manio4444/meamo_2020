import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'slick-carousel';


$(document).ready(function() {

  const sliderDestkop = $('.home_slider_list.desktop');
  const sliderMobile = $('.home_slider_list.mobile');

  // if (window.matchMedia("(orientation: portrait)").matches) {
  //   const sliderToShow = sliderMobile;
  //   sliderDestkop.hide();
  // } else {
  //   const sliderToShow = sliderDestkop;
  //   sliderMobile.hide();
  // }
  const sliderToShow = sliderDestkop; //temp

  sliderToShow.slick({
    // centerMode: true,
    // variableWidth:true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    // infinite: false,
    // asNavFor: $('#section_realization .r_slider_sub'),
    // focusOnSelect: true,
  });

});
