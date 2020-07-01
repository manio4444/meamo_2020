import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import isTouchDevice from '../helpers/is-touch';
import 'jquery-zoom';


$(document).ready(function() {
  if (isTouchDevice()) {
    return;
  }

  const $sliderElements = $('.meamo-product__slider-big li');

  $sliderElements.each(function () {
    $(this).zoom({
      url: $(this).find('img').attr('src'),
    });
  });

});
