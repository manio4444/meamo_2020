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

<div class="block_newsletter meamo-newsletter">
  <div class="row">
    <div class="col-xs-12">
      <h3 class="meamo-newsletter__title meamo-title-normal">
        {l s='Newsletter' d='Shop.Theme.Newsletter'}
      </h3>

      <form action="{$urls.pages.index}#footer" method="post">
        <div class="row">
            {if $conditions}
            <div class="col-xs-12">
              <p class="meamo-newsletter__txt">{$conditions}</p>
            </div>
            {/if}

          <div class="col-xs-12 meamo-newsletter__inputs">
            <div class="input-wrapper">
              <input
                name="email"
                type="email"
                value="{$value}"
                placeholder="{l s='Your email address' d='Shop.Forms.Labels'}"
                aria-labelledby="block-newsletter-label"
              >
            </div>
            <input
            class="btn btn-primary"
            name="submitNewsletter"
            type="submit"
            value="{l s='Sign up' d='Shop.Theme.Newsletter'}"
            >
            <input type="hidden" name="action" value="0">
            <div class="clearfix"></div>
          </div>

          <div class="col-xs-12 meamo-newsletter__agreement">
            <label for="cNewsletter" class="meamo-checkbox">
              <input type="checkbox" id="cNewsletter" required>
              <span class="meamo-checkbox__icon"></span>
            </label>
            <span>{l s='Newsletter agreement' d='Shop.Theme.Newsletter'}</span>
          </div>

          <div class="col-xs-12">
              {if $msg}
                <p class="alert {if $nw_error}alert-danger{else}alert-success{/if}">
                  {$msg}
                </p>
              {/if}
              {if isset($id_module)}
                {hook h='displayGDPRConsent' id_module=$id_module}
              {/if}
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
