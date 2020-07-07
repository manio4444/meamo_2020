import $ from 'jquery';
window.$ = $;
window.jQuery = $;

$(document).ready(function() {
  const $searchInvoker = $('[data-search-overlay]');
  const $searchOverlay = $('.search-overlay');

  $searchInvoker.click(function () {
    $searchOverlay.toggleClass('is-active');
  });

});
