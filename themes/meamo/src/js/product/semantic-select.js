import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'semantic-ui-dropdown/dropdown.min.js';
import 'semantic-ui-transition/transition.min.js';

$(document).ready(function() {

  $('.ui.dropdown').dropdown();

});
