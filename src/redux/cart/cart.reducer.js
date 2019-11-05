import { addCartItems } from "./cart.utils";

const INITIAL_STATE = {
  hiddenList: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_HIDDEN_LIST":
      return {
        ...state,
        hiddenList: action.payload
      };
    case "ADD_CART_ITEM":
      return {
        ...state,
        cartItems: addCartItems(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
