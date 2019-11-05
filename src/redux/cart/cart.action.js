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

export default toggleHiddenList;
