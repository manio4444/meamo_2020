<div class="wishlist-icon header-navigation__right-item">
  <a rel="nofollow" href="{$link->getCMSLink(8)}">
    <i class="material-icons favorite">favorite</i>
    <span data-wishlist-count class="wishlist-icon__count">(0)</span>
  </a>
</div>
<!-- temp here up -->





<div id="_desktop_cart" class="shopping-cart header-navigation__right-item">
  <div class="blockcart cart-preview {if $cart.products_count > 0}active{else}inactive{/if}" data-refresh-url="{$refresh_url}">
    <div class="header">
      {if $cart.products_count > 0}{/if}
        <a rel="nofollow" href="{$cart_url}">
          <i class="material-icons shopping-cart">shopping_cart</i>
          <span class="for-mobile-overlay">{l s='Cart' d='Shop.Theme.Checkout'}</span>
          <span class="cart-products-count">({$cart.products_count})</span>
        </a>
    </div>
  </div>
</div>
