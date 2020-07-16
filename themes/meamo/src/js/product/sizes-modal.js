import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'semantic-ui-transition/transition.min.js';
import 'semantic-ui-dimmer/dimmer.min.js';
import 'semantic-ui-modal/modal.min.js';

$(document).ready(function() {

  const $modalInvoker = $('[data-sizes-modal]');
  const $modalContent = $('.meamo-additional-info__sizing-modal');
  const $tableDataDefault = $('.meamo-additional-info__table-data');
  const $tableDataCustom = $('.meamo-additional-info__table-data-custom');

  const $tableData = !$.trim($tableDataCustom.html()) ? $tableDataDefault : $tableDataCustom;
  const tableLines = $tableData.text().split("\n");

console.log($tableDataCustom.html());
console.log($.trim($tableDataCustom.html()));
console.log(!$.trim($tableDataCustom.html()));
  tableLines.forEach(item => {
    const $line = $('<tr></tr>');

    item.split(";").forEach(item => {
      $line.append(`<td>${item}</td>`);
    });

    $modalContent.find('table').append($line);

    $tableDataDefault.remove();
    $tableDataCustom.remove();
  });

  // console.log($tableData.text());
  // console.log(tableLines);

  $modalInvoker.click(e => {
    e.preventDefault();
    $modalContent.modal('show');
  });

});
