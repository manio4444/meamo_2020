{if $page_name == 'index'}
  <h1>
    <a href="{$urls.base_url}">
      <img class="logo img-responsive" src="{$shop.logo}" alt="{$shop.name}">
    </a>
  </h1>
  {else}
  <a href="{$urls.base_url}">
    <img class="logo img-responsive" src="{$shop.logo}" alt="{$shop.name}">
  </a>
{/if}
