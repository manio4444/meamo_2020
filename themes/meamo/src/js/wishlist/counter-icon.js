import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import { CountWishlist } from './helpers';

export const UpdateWishlistCount = (animation = false) => {
  const wishlistCount = $('[data-wishlist-count]');
  const wishlistIcon = $('.header-navigation .wishlist-icon i');
  const countWishlist = CountWishlist();

  wishlistCount.text(`(${countWishlist})`);
  if (animation === true && countWishlist > 0) {
    wishlistIcon.removeClass('active');
    setTimeout(() => {
      wishlistIcon.addClass('active');
    }, 0); // setTimeout wrap for prevent effect that class toggle is not seen (some JS engine stuff)
  } else {
    wishlistIcon.removeClass('active');
  }
};

$(document).ready(() => {
  UpdateWishlistCount(true);
});
