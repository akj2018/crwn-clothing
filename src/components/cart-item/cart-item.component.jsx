import React from "react";

// import "./cart-item.styles.scss";
import {
  CartItemContainer,
  ItemDetailsContainer,
  NameContainer,
  PriceContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>
          ${price} x {quantity}
        </PriceContainer>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
