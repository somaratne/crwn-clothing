const toggleHiddenList = val => {
  return {
    type: "TOGGLE_HIDDEN_LIST",
    payload: val
  };
};

export const addItems = item => {
  return {
    type: "ADD_CART_ITEM",
    payload: item
  };
};

export const removeItems = id => {
  return {
    type: "REMOVE_CART_ITEM",
    payload: id
  };
};

export const addItemsToCart = item => {
  return {
    type: "ADD_ITEMS_TO_CART",
    payload: item
  };
};

export const removeItemsFromCart = item => {
  return {
    type: "REMOVE_ITEMS_FROM_CART",
    payload: item
  };
};

export default toggleHiddenList;
