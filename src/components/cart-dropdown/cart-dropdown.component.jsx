import React from "react";
// for using redux
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

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
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item}></CartItem>
          ))}
        </div>
      ) : (
        <span className="empty-message">Your Cart is Empty</span>
      )}
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
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
