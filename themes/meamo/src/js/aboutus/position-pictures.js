import $ from 'jquery';
window.$ = $;
window.jQuery = $;

$(document).ready(function() {
  const $aboutus_temp_img_container = $('.meamo-aboutus__pictures-temp');
  const $aboutus_img_0_container = $('.meamo-aboutus__side-img').eq(0);
  const $aboutus_img_1_container = $('.meamo-aboutus__side-img').eq(1);

  $aboutus_temp_img_container.find('img').each(function(index) {
    if (index === 0) {
      $(this).appendTo($aboutus_img_0_container);
      console.log('first attempt');
    }
    if (index === 1) {
      $(this).appendTo($aboutus_img_1_container);
      console.log('second attempt');
    }
    // $(this)
    // .wrap('<div class="meamo-aboutus__image-section"></div>');
    // $(this)
    // .appendTo('<div class="meamo-aboutus__image-section"></div>');
  });

  // $aboutus_temp_img_container.remove();

});
