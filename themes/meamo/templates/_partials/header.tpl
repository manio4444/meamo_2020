{block name='header_top'}
  <div class="header-navigation">
    <div class="header-navigation__container">

      <div class="header-logo">
        {if $page.page_name == 'index'}
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
      </div>

      {hook h='displayNav1'}

    </div>
  </div>
{/block}
