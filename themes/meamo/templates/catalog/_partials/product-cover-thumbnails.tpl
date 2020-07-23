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
<div class="meamo-product__sliders">
  {block name='product_cover'}
  <div class="meamo-product__slider-big">
    <ul>
      {foreach from=$product.images item=image}
      <li class="meamo-product__slider-big-element" data-product-zoom style="background-image: url('{$image.bySize.large_default.url}')">
        <img id="meamo-product__slider-big-element-img" src="{$image.bySize.large_default.url}" alt="" title="" itemprop="image">
      </li>
      {/foreach}
    </ul>
</div>

{if $product.cover}
  <div data-wishlist-cover="{$product.cover.bySize.home_default.url}" style="display: none;"></div>
{/if}
  {/block}

  {block name='product_images'}
  <div class="meamo-product__slider-small">
    <ul>
      {foreach from=$product.images item=image}
      <li class="meamo-product__slider-small-element">
        <img id="meamo-product__slider-small-element-img" src="{$image.bySize.large_default.url}" alt="" title="" itemprop="image">
      </li>
      {/foreach}
    </ul>
</div>
  {/block}
</div>
{hook h='displayAfterProductThumbs'}
