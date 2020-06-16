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
<section class="homepage-shop">
  <div class="homepage-shop__top">
    <h2 class="homepage-shop__title meamo-title-normal">
      {l s='Products first row' d='Shop.Theme.Homepage'}
    </h2>
    <h3 class="homepage-shop__title-sub">
      {l s='Products second row' d='Shop.Theme.Homepage'}
    </h3>
  </div>

  <div class="products homepage-shop__products_list">
    {foreach from=$products item="product"}
      {include file="catalog/_partials/miniatures/product.tpl" product=$product}
    {/foreach}
  </div>

  <div class="text-xs-center">
    <a class="homepage-shop__button" href="{$link->getCategoryLink(2)|escape:'html':'UTF-8'}">
      {l s='Go to shop' d='Shop.Theme.Homepage'}
    </a>
  </div>
</section>
