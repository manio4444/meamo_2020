const WISHLIST_PRODUCT_TEMPLATE = `
<article
  class="product-miniature js-product-miniature meamo-productbox"
  data-id-product="{{id_product}}"
  itemscope=""
  itemtype="http://schema.org/Product"
>
  <div class="thumbnail-container">
    <a href="{{url}}" class="thumbnail product-thumbnail" >
      <img
        src="{{cover}}"
        alt="{{name}}"
        data-full-size-image-url=""
      >
    </a>
    <div class="meamo-productbox__description">
      <h2 class="meamo-productbox__title" itemprop="name">
        <a href="{{url}}">{{name}}</a>
      </h2>
      <div class="meamo-productbox__price" style='pointer-events:none;'>{{group_select}}</div>
      <div style="flex-basis:100%; height: 0px;"></div>
    </div>
  </div>
</article>
`;
export default WISHLIST_PRODUCT_TEMPLATE;
