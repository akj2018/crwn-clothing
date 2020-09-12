import React from "react";

import "./checkout.styles.scss";
import {
  CheckoutHeaderBlockContainer,
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  TestWarningContainer,
  TotalContainer,
} from "./checkout.styles";

// for using redux
import { connect } from "react-redux";
// for using selectors to get values to cartItems and totalPrice
import { createStructuredSelector } from "reselect";

// importing selectors
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <CheckoutHeaderBlockContainer>
          <span>Product</span>
        </CheckoutHeaderBlockContainer>
        <CheckoutHeaderBlockContainer>
          <span>Description</span>
        </CheckoutHeaderBlockContainer>
        <CheckoutHeaderBlockContainer>
          <span>Quantity</span>
        </CheckoutHeaderBlockContainer>
        <CheckoutHeaderBlockContainer>
          <span>Price</span>
        </CheckoutHeaderBlockContainer>
        <CheckoutHeaderBlockContainer>
          <span>Remove</span>
        </CheckoutHeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <TestWarningContainer>
        *Please Using The Following Test Credit card For Payments*
        <ul>
          <li>NUMBER: 4242424242424242 </li>
          <li>BRAND: Visa </li>
          <li>CVC: Any 3 digits </li>
          <li>DATE: Any future date </li>
        </ul>
      </TestWarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
