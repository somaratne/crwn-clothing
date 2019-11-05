const INITIAL_STATE = {
  hiddenList: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_HIDDEN_LIST":
      return {
        ...state,
        hiddenList: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
