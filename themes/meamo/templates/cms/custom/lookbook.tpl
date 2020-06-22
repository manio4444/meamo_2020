{* <style media="screen">
.meamo-lookbook__fancy-txt::before {
  content: '{l s='lookbook' d='Shop.Theme.Lookbook'}';
}
</style> *}

<section class="meamo-lookbook">

  <div class="meamo-lookbook__text-section">
    <h1 class="meamo-lookbook__title">{l s='About Us' d='Shop.Theme.Lookbook'}</h1>
    <p class="meamo-lookbook__subtitle">{{l s='Lookbook subtitle' d='Shop.Theme.Lookbook'}|nl2br nofilter}</p>
    <p class="meamo-lookbook__text">{{l s='Lookbook text' d='Shop.Theme.Lookbook'}|nl2br nofilter}</p>
  </div>

  {block name="content"}
    <p>Hello world! This is HTML5 Boilerplate.</p>
  {/block}

  <div class="text-xs-center">
    <a class="meamo-button meamo-lookbook__button" href="{$link->getCategoryLink(2)|escape:'html':'UTF-8'}">
      {l s='Go to shop' d='Shop.Theme.Homepage'}
    </a>
  </div>
</section>
