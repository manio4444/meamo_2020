import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'semantic-ui-dropdown/dropdown.min.js';
import 'semantic-ui-transition/transition.min.js';

$(document).ready(function() {

  $('.ui.dropdown').dropdown();

  // prestashop is reRendering some blocks when products combinatins are updated
  prestashop.on('updatedProduct',function() {
    console.log('dropdown');
    $('.ui.dropdown').dropdown();
});


});
