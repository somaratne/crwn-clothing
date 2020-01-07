import { addCartItems, removeItem, increaseCartItems } from "./cart.utils";

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
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      };
    case "ADD_ITEMS_TO_CART":
      return {
        ...state,
        cartItems: increaseCartItems(state.cartItems, action.payload)
      };
    case "REMOVE_ITEMS_FROM_CART":
      return {
        ...state,
        cartItems: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
