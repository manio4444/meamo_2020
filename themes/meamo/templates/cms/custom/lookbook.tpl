<section class="meamo-lookbook">

  <div class="meamo-lookbook__text-section">
    <h1 class="meamo-lookbook__title meamo-title-normal">{l s='Lookbook title' d='Shop.Theme.Lookbook'}</h1>
    <p class="meamo-lookbook__subtitle">{{l s='Lookbook subtitle' d='Shop.Theme.Lookbook'}|nl2br nofilter}</p>
    <p class="meamo-lookbook__text">{{l s='Lookbook text' d='Shop.Theme.Lookbook'}|nl2br nofilter}</p>
  </div>

  <div class="meamo-lookbook__pictures-temp">
    {block name="content"}
    <p>Hello world! This is HTML5 Boilerplate.</p>
    {/block}
  </div>

  <div class="meamo-lookbook__button text-xs-center">
    <a class="meamo-button" href="{$link->getCategoryLink(2)|escape:'html':'UTF-8'}">
      {l s='Go to shop' d='Shop.Theme.Homepage'}
    </a>
  </div>
</section>
