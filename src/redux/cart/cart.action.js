const toggleHiddenList = val => {
  return {
    type: "TOGGLE_HIDDEN_LIST",
    payload: val
  };
};

export default toggleHiddenList;
