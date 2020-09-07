export const addItemToCart = (cartItems, itemToAdd) => {
  const exsistingItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (exsistingItem) {
    return cartItems.map((item) => {
      if (item.id === itemToAdd.id) {
        return { ...itemToAdd, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const exsistingItem = cartItems.find((item) => item.id === itemToRemove.id);

  if (exsistingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
