import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import {
  GetWishlist,
  DeleteWishlist,
  // FetchProduct,
} from './helpers';
import WISHLIST_PRODUCT_TEMPLATE from './product-template';

export const MoveToCart = item => {
  const data = {
    ...item,
    add: '1',
    action: 'update',
  };
  // delete data.token;
  $.ajax({
    method: 'POST',
    headers: {
      Accept: "application/json, text/javascript, */*",
    },
    data,
    url: item.basketEndpoint,
    complete: () => window.location.href = item.basketEndpoint,
  });
};

export const DeleteFromWishlist = item => {
  DeleteWishlist(item);
  RenderWishlistList();
};

export const RenderWishlistList = () => {
  const $wishlistContainer = $('[data-wishlist-list]');
  const $wishlistSpinner = $('.meamo-wishlist__spinner');
  const $wishlistEmptyButtons = $('[data-wishlist-empty-buttons]');

  const wishlistButtonCart = '[data-wishlist-button-cart]';
  const wishlistButtonDelete = '[data-wishlist-button-delete]';

  $wishlistContainer.empty();

  if (!GetWishlist().length) {
    $wishlistSpinner.hide();
    return;
  }

  GetWishlist().forEach(item => {
    $(WISHLIST_PRODUCT_TEMPLATE).appendTo($wishlistContainer);

    const $justReplaced = $wishlistContainer.find('.meamo-productbox').last();
    let justReplacedHTML = $justReplaced.html();

    Object.keys(item).forEach(key => {
      const search = `{{${key}}}`;
      const replaceWith = item[key].toString();

      justReplacedHTML = justReplacedHTML.split(search).join(replaceWith); //split & join works as replaceAll
    });

    $justReplaced.html(justReplacedHTML);

    $wishlistEmptyButtons.find(wishlistButtonCart)
    .clone()
    .appendTo($justReplaced.find('.meamo-productbox__description'))
    .show();

    $wishlistEmptyButtons.find(wishlistButtonDelete)
    .clone()
    .appendTo($justReplaced.find('.meamo-productbox__description'))
    .show();

    $justReplaced.find(wishlistButtonCart).click(() => {
      MoveToCart(item);
    });

    $justReplaced.find(wishlistButtonDelete).click(() => {
      DeleteFromWishlist(item);
    });

    $wishlistContainer.removeClass('ready');
    $wishlistSpinner.show();
    $justReplaced.find('img').bind('load', () => {
      $wishlistSpinner.hide();
      $wishlistContainer.addClass('ready');
    });
  });
};

$(document).ready(function() {
  const $wishlistContainer = $('[data-wishlist-list]');

  if (!$wishlistContainer.length) {
    return;
  }

  RenderWishlistList();
});
