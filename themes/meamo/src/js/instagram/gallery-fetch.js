import $ from 'jquery';
window.$ = $;
window.jQuery = $;

// Because of some ES6 modules error problems, instafeed
// is loaded from CDN in <script> on bottom of <body>
// import Instafeed from 'instafeed.js';

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
  const instagramAccessToken = 'IGQVJYOS1KSGVHZAmZAfMWZAVaHpzUlA3UG11cWhkRVFXRlRDQjNRQ2RCQ3gxNXBPTURhNDVBbG5mWGpvNDhiLXg4NWx0VHJzYXpkMEdvdHdRT3RXRzdJRTNsemx6T19NWDlKY1A1cVdBMVdiZATVjTEVnbAZDZD';

  if ($constinstagramSlider.length === 0) {
    return;
  }

  $.ajax({
    method: "GET",
    url: `https://graph.instagram.com/${instagramUserId}/media`,
    data: {
      access_token: instagramAccessToken,
      fields: 'media_url,permalink'
    }
  })
  .done(function(data) {
    const images = data.data.map(item => item.media_url);

    images.forEach(imageUrl => {
      $('<img>')
      .attr('src', imageUrl)
      .appendTo($constinstagramSlider);
    });

    $constinstagramSlider.find('img').each(function() {
      $(this)
      .wrap('<li>')
      .wrap('<a href="#">');
    });

    $constinstagramSlider.slick(sliderConfig);
  });

});
