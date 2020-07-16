{**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
<div class="product-additional-info">
  <div class="meamo-additional-info__icons">
    <a class="meamo-additional-info__icon" href="{url entity='cms' id=1}" target="_blank">
      <img src="{$urls.theme_assets}/img/icon-delivery.png" alt="">
      <span>{l s='Shipment 1-3 days' d='Shop.Theme.Product_page'}</span>
    </a>

    <a class="meamo-additional-info__icon" href="{url entity='cms' id=5}" target="_blank">
      <img src="{$urls.theme_assets}/img/icon-return.png" alt="">
      <span>{l s='Return 14 days' d='Shop.Theme.Product_page'}</span>
    </a>

    <a class="meamo-additional-info__icon" href="#" data-sizes-modal>
      <img src="{$urls.theme_assets}/img/icon-sizes.png" alt="">
      <span>{l s='Sizes info' d='Shop.Theme.Product_page'}</span>
    </a>
  </div>

  <div class="ui modal meamo-additional-info__sizing-modal">
    <i class="close material-icons">close</i>
    <div class="header">
      {l s='Size table' d='Shop.Theme.Sizes_table'}
    </div>
    <div class="content">
      <div class="meamo-additional-info__table-data">{l s='Tabela rozmiarów, nowa linia nowy wiersz, średnik nowa kolumna' d='Shop.Theme.Sizes_table'}</div>
      <div class="meamo-additional-info__table-data-custom">{$product.description_short|strip_tags:false}</div>
      <table class="ui celled table page_shop_sizing">
      </table>
    </div>
    </div>

  {hook h='displayProductAdditionalInfo' product=$product}
</div>
