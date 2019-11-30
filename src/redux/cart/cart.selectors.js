import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selecteCartItemsQuntity = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, c) => {
      return acc + c.quantity;
    }, 0)
);

export const selectHiddenList = createSelector(
  [selectCart],
  cart => cart.hiddenList
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, c) => {
      return acc + c.price * c.quantity;
    }, 0)
);
