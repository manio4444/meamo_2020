<section class="meamo-wishlist meamo-section--padding">
  <div class="meamo-wrapper">

    <div class="meamo-wishlist__text-section text-xs-center">
      <h1 class="meamo-wishlist__title meamo-title-normal">{l s='Wishlist' d='Shop.Theme.Wishlist'}</h1>
      <p class="meamo-wishlist__text">{{l s='Wishlist text' d='Shop.Theme.Wishlist'}|nl2br nofilter}</p>
      <br>
      <br>
    </div>

    <div class="text-xs-center">
      <div class="lds-roller meamo-wishlist__spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div id="products" class="meamo-products-list">
      <div class="products" data-wishlist-list></div>
    </div>

    <div data-wishlist-empty-buttons style="display: none;">
      <button class="btn-primary" data-wishlist-button-cart>
        <i class="material-icons shopping-cart">&#xE547;</i>
        {l s='Add to cart' d='Shop.Theme.Actions'}
      </button>

      <button class="btn-primary" data-wishlist-button-delete>
        <i class="material-icons delete">delete</i>
      </button>
    </div>

  </div>
</section>
