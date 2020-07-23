import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import { CountWishlist } from './helpers';

export const UpdateWishlistCount = () => {
  const wishlistCount = $('[data-wishlist-count]');

  wishlistCount.text(`(${CountWishlist()})`);
};

$(document).ready(UpdateWishlistCount);
