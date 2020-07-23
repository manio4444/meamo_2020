const WISHLIST_SESSION_NAME = 'meamo-wishlist';

export const GetWishlist = () => {
  const wishlist = JSON.parse(localStorage.getItem(WISHLIST_SESSION_NAME));

  if (wishlist === null) {
    return [];
  }
  if (!Array.isArray(wishlist)) {
    console.error('[WISHLIST-MODULE] CountWishlist - Wishlist storage is not Array');
    return [];
  }

  return wishlist;
};

export const CountWishlist = () => GetWishlist().length;

export const ExistsWishlist = id_product => {
  let exists = false;

  GetWishlist().forEach(wishlistItem => {
    if (wishlistItem.id_product === id_product) {
      exists = true;
    }
  });

  return exists;
};

export const DeleteWishlist = item => {
  localStorage.setItem(
    WISHLIST_SESSION_NAME,
    JSON.stringify(GetWishlist().filter(wishlistItem => {
      return wishlistItem.id_product !== item.id_product;
    }))
  );
};

export const AddWishlist = item => {
  localStorage.setItem(
    WISHLIST_SESSION_NAME,
    JSON.stringify([...GetWishlist(), item])
  );
};
