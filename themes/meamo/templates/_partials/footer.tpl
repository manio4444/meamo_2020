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
<div class="container">
  {block name='hook_footer_before'}
    {hook h='displayFooterBefore'}
  {/block}
</div>

{block name='instagram_section'}
  {include file='catalog/_partials/instagram-section.tpl'}
{/block}

<div class="meamo-footer">
  <div class="meamo-wrapper">
    <div class="meamo-footer__row-hook_footer">
      {block name='hook_footer'}
        {hook h='displayFooter'}
      {/block}
    </div>
    <div class="meamo-footer__row-hook_footer_after">
      {block name='hook_footer_after'}
        {hook h='displayFooterAfter'}
      {/block}
    </div>
    <div class="meamo-footer__row-realization">
      <span>
        {l s='Projekt i realizacja' d='Shop.Theme.Footer'} -
        <a class="_blank" href="https://www.facebook.com/clou.studioo/" target="_blank" rel="nofollow">
          <strong>Clou.Studio</strong>
        </a>
      </span>
      <div class="meamo-footer__logo">
        <img class="logo img-responsive" src="{$shop.logo}" alt="{$shop.name}">
      </div>
    </div>
  </div>
</div>
