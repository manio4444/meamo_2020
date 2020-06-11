<div class="currency-selector header-navigation__right-item">
  {foreach from=$currencies item=currency}
    <a title="{$currency.name}" rel="nofollow" href="{$currency.url}" class="currency-selector__item" {if $currency.current} data-current {/if}>{$currency.iso_code}</a>
  {/foreach}
</div>
