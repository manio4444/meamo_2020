<style media="screen">
.meamo-aboutus__quote {
  background-image: url('{$urls.theme_assets}/img/meamo-quote.png');
}
.meamo-aboutus__fancy-txt::before {
  content: '{l s='Block 2 philosophy' d='Shop.Theme.Aboutus'}';
}
</style>

<section class="meamo-aboutus">

  <div id="custom-text"> {* same code as on homepage *}
    <h1 class="meamo-aboutus__title">{l s='About Us' d='Shop.Theme.Aboutus'}</h1>
    <p>{{l s='First text' d='Shop.Theme.Aboutus'}|nl2br nofilter}</p>
  </div>

  <div class="meamo-aboutus__sides reverse-desktop">
    <div class="meamo-aboutus__side meamo-aboutus__side-img">
      <img src="{$urls.theme_assets}/img/shallow-focus-photography-of-assorted-color-clothes-hanged-1078958.jpg" alt="">
    </div>
    <div class="meamo-aboutus__side meamo-aboutus__side-txt">
      <p class="meamo-aboutus__quote">{l s='Block 1 quote' d='Shop.Theme.Aboutus'}</p>
      <p class="meamo-aboutus__txt">{l s='Block 1 txt' d='Shop.Theme.Aboutus'}</p>
      <div class="text-xs-center">
        <a class="meamo-aboutus__more-link" href="{$link->getCategoryLink(2)|escape:'html':'UTF-8'}">
          {l s='More' d='Shop.Theme.Aboutus'}
        </a>
      </div>
    </div>
  </div>

  <div class="meamo-aboutus__sides meamo-aboutus__fancy-txt">
    <div class="meamo-aboutus__side meamo-aboutus__side-img">
      <img src="{$urls.theme_assets}/img/solazul_01.png" alt="">
    </div>
    <div class="meamo-aboutus__side meamo-aboutus__side-txt">
      <p class="meamo-aboutus__txt">&nbsp;</p>
      <h3 class="meamo-title-normal">{l s='Block 2 title' d='Shop.Theme.Aboutus'}</h3>
      <p class="meamo-aboutus__txt">{l s='Block 2 txt' d='Shop.Theme.Aboutus'}</p>
    </div>
  </div>

  <div class="meamo-aboutus__bottom-quote meamo-aboutus__side-txt">
    <p class="meamo-aboutus__quote">{l s='Block 3 quote' d='Shop.Theme.Aboutus'}</p>
  </div>

  <div class="text-xs-center">
    <a class="meamo-button meamo-aboutus__button" href="{$link->getCategoryLink(2)|escape:'html':'UTF-8'}">
      {l s='Go to shop' d='Shop.Theme.Homepage'}
    </a>
  </div>
</section>
