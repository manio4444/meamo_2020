<style media="screen">
.meamo-product__bestsellers-list::before {
  content: '{l s='bestsellers' d='Shop.Theme.ProductPage'}';
}
</style>

<div id="products" class="meamo-products-list meamo-product__bestsellers-list">
  <div class="products">
    {foreach from=$products item="product"}
      {include file="catalog/_partials/miniatures/product.tpl" product=$product}
    {/foreach}
  </div>
</section>
