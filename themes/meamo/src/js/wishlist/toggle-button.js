import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import {
  GetWishlist,
  AddWishlist,
  DeleteWishlist,
  ExistsWishlist,
} from './helpers';
import { UpdateWishlistCount } from './counter-icon';


const CreateWishlistProductObject = ($form) => {
  const object = {};
  $form.serializeArray().forEach(
    item => object[item.name] = item.value
  );
  return object;
};

const AddToWishlist = () => {
  const $wishlistProductForm = $('[data-wishlist-product-form]');
  const basketEndpoint = $wishlistProductForm.attr('action');
  const name = $('[data-wishlist-name]').attr('data-wishlist-name');
  const cover = $('[data-wishlist-cover]').attr('data-wishlist-cover');
  const group_select = $('[data-wishlist-group-select]').find('option:selected').text();
  const url = window.location.href;
  const wishlistProductObject = CreateWishlistProductObject($wishlistProductForm);

  if (!name || !$wishlistProductForm.length) {
    console.error('[DATA-WISHLIST-ADD] click() - Basic data not found');
    return;
  }

  AddWishlist({
    ...wishlistProductObject,
    basketEndpoint,
    name,
    cover,
    url,
    group_select,
  });
};

export const DeleteFromWishlist = () => {
  const item = {
    id_product: $('[name="id_product"]').val(),
  };
  DeleteWishlist(item);
};

$(document).ready(function() {
  const $wishlistAddInvoker = $('[data-wishlist-toggle]');
  const id_product = $('[name="id_product"]').val();

  if (ExistsWishlist(id_product)) {
    $wishlistAddInvoker.text('favorite');
  }

  $wishlistAddInvoker.click(function () {
    if ($wishlistAddInvoker.text() === 'favorite_border') {
      $wishlistAddInvoker.text('favorite');
      AddToWishlist();
    } else {
      $wishlistAddInvoker.text('favorite_border');
      DeleteFromWishlist();
    }

    UpdateWishlistCount();
  });
});
