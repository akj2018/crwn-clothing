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
