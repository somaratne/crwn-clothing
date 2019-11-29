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
