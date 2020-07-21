import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import isTouchDevice from '../helpers/is-touch';
// https://codepen.io/galulex/pen/eNZRVq

$(document).ready(function() {
  if (isTouchDevice()) {
    return;
  }

  const $productImages = $('[data-product-zoom]');

  $productImages.each(function () {
    this.addEventListener('mousemove', e => {
      const zoomer = e.currentTarget;
      let offsetX, offsetY;
      e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
      e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX;
      const x = offsetX / zoomer.offsetWidth * 100;
      const y = offsetY / zoomer.offsetHeight * 100;
      zoomer.style.backgroundPosition = x + '% ' + y + '%';
    })
  });

});
