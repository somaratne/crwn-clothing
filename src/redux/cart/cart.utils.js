export const addCartItems = (cartItems, newItem) => {
  const exists = cartItems.find(item => item.id === newItem.id);
  if (!exists) {
    newItem.quantity = 1;
    return [...cartItems, newItem];
  } else {
    return cartItems.map(item => {
      if (item.id === newItem.id) item.quantity += 1;
      return item;
    });
  }
};
