import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import Instafeed from 'instafeed.js';

const sliderConfig = {
  variableWidth: true,
  arrows: false,
  infinite: true,
  // prevArrow: '<span class="slick-prev material-icons">keyboard_arrow_left</span>',
  // nextArrow: '<span class="slick-next material-icons">keyboard_arrow_right</span>',
  rows: 0, // fix for not adding <div> wrapper inside slide's
};

$(document).ready(function() {

  const $constinstagramSlider = $('.section-instagram #instafeed');
  const instagramUserId = '17841433231003838';
  const instagramAccessToken = 'IGQVJYVGxMMjFrV2ltSW1oUjJKSnhwVnZAfMFF2VWl1VFhUYXY5dVRjQ0I2WlZAUbXFnZAEx2eGFvamNZAYkhfQzJFNjlGVU5adFI2R1Y4YnVXS3pJamRKN19BMmU4SzVzU1FnTVlLNG9ldTVoano1VVN2LQZDZD';

  if ($constinstagramSlider.length === 0) {
    return;
    console.log('##################### return ###################');
  }

  $.ajax({
    method: "GET",
    url: `https://graph.instagram.com/${instagramUserId}/media`,
    data: {
      access_token: instagramAccessToken,
      fields: 'media_url,permalink',
      size: 'm'
    }
  })
  .done(function(data) {
    const images = data.data.map(item => item.permalink);

    images.forEach(imageUrl => {
      $('<img>')
      .attr('src', `${imageUrl}media/?size=m`)
      .appendTo($constinstagramSlider);
    });

console.log($constinstagramSlider.find('img'));
    $constinstagramSlider.find('img').each(function() {
      $(this)
      .wrap('<li>')
      .wrap('<a href="#">');
    });

    $constinstagramSlider.slick(sliderConfig);
  });

});
