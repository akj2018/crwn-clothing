import React from "react";

// import "./header.styles.scss";

// for importing svg file
import { ReactComponent as Logo } from "../../assets/crown.svg";
// for using routing in react using Link which almost works like <a> anchor tag
// import { Link } from "react-router-dom";

// for auth.signOut() and exit from auth status
import { auth } from "../../firebase.utils";

import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

// Using Selectors for replacing cart:hidden and user:currentUser
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
// for making selector code simpler
import { createStructuredSelector } from "reselect";

// For Using CSS Styled Components
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            as="div"
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
