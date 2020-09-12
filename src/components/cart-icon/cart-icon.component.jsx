import React from "react";

// import "./cart-icon.styles.scss";
import { CartIconContainer, ItemCountContainer } from "./cart-icon.styles";

import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
// To make the cartDropdown appear-dissapear when icon is clicked
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// to use selectCartItemsCount Selector so that component do not re-render when changes in auth are made and not in cartItems
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <Icon className="shopping-icon" />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
