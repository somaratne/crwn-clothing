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

export const removeItem = (cartItems, itemId) => {
  return cartItems.filter(i => i.id !== itemId);
};

export function increaseCartItems(cartItems, itemId) {
  return cartItems.map(i => {
    if (i.id === itemId) {
      i.quantity += 1;
    }
    return i;
  });
}
