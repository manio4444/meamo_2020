<div id="_desktop_cart" class="shopping-cart">
  <div class="blockcart cart-preview {if $cart.products_count > 0}active{else}inactive{/if}" data-refresh-url="{$refresh_url}">
    <div class="header">
      {if $cart.products_count > 0}{/if}
        <a rel="nofollow" href="{$cart_url}">
          <i class="material-icons shopping-cart">shopping_cart</i>
          {* <span class="hidden-sm-down">{l s='Cart' d='Shop.Theme.Checkout'}</span> *}
          <span class="cart-products-count">({$cart.products_count})</span>
        </a>
    </div>
  </div>
</div>
