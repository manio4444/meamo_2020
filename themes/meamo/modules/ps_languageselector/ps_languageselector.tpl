<div class="lang-selector header-navigation__right-item">
  {foreach from=$languages item=language}
    <a href="{url entity='language' id=$language.id_lang}" class="lang-selector__item" {if $language.id_lang == $current_language.id_lang} data-current {/if} data-iso-code="{$language.iso_code}">{$language.iso_code}</a>
  {/foreach}
</div>
