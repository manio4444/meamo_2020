import $ from 'jquery';
window.$ = $;
window.jQuery = $;

$(document).ready(function() {
  const $lookbook_container = $('.meamo-lookbook');
  const $lookbook_pictures_temp = $('.meamo-lookbook__pictures-temp');
  let counter = 1;

  function moveElements() {
    $lookbook_pictures_temp.find('.meamo-lookbook__image-section').each(function() {
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
  }

  $lookbook_pictures_temp.find('a').has('img').each(function() {
    $(this)
    .wrap('<div class="meamo-lookbook__image-section"></div>');
  });

  moveElements();

  $lookbook_pictures_temp.find('img').each(function() {
    $(this)
    .wrap('<div class="meamo-lookbook__image-section"></div>');
  });

  moveElements();

  $lookbook_pictures_temp.remove();

});
