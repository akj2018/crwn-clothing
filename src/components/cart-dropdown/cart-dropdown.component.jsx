import React from "react";
// for using redux
import { connect } from "react-redux";

// import "./cart-dropdown.styles.scss";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./cart-dropdown.styles";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

// To prevent from re-render when changes are made only in auth state and not in cart Items
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

// for suign the history props to move to checkout page when the button is clicked
import { withRouter } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <CartItemsContainer>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item}></CartItem>
          ))}
        </CartItemsContainer>
      ) : (
        <EmptyMessageContainer>Your Cart is Empty</EmptyMessageContainer>
      )}
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
