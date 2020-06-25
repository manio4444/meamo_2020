import $ from 'jquery';
window.$ = $;
window.jQuery = $;

$(document).ready(function() {
  const $lookbook_container = $('.meamo-lookbook');
  let counter = 1;

  $lookbook_container.find('img').each(function() {
    $(this)
    .wrap('<div class="meamo-lookbook__image-section"></div>');
  });

  $('.meamo-lookbook__image-section').each(function() {
    $(this)
    .appendTo($lookbook_container)
    .addClass('counter-' + counter);

    if ($(this).is(':nth-child(4n+1')) {
      $(this).addClass('padding');
    }

    if ($(this).is(':nth-child(4n+2')) {
      $(this).addClass('padding');
    }

    counter++;
  });

  $('.meamo-lookbook__pictures-temp').remove();

});
