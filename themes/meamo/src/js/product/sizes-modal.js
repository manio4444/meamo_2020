import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'semantic-ui-transition/transition.min.js';
import 'semantic-ui-dimmer/dimmer.min.js';
import 'semantic-ui-modal/modal.min.js';

$(document).ready(function() {

  const $modalInvoker = $('[data-sizes-modal]');
  const $modalContent = $('.meamo-additional-info__sizing-modal');

  $modalInvoker.click(e => {
    e.preventDefault();
    $modalContent.modal('show');
  });

});
