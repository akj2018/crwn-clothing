import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";

import { auth, createUserProfile } from "./firebase.utils";

// To use the setCurrentUser functuon instead of calling setState on state
import { connect } from "react-redux";

// action creator to pass into dispatch function
import { setCurrentUser } from "./redux/user/user.actions";

// for alternate simpler code - selectors
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // onAuthStateChange() runs wherever user logged in usign email and password or using Google sign In or user Sign Out
    // It retruns a method which can unsubscrube the listener when we don't need it to prevent memory leak
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // Checking if user exists or not and dont want to set if user is signing out
      if (userAuth) {
        // Get Reference object for document
        const userRef = await createUserProfile(userAuth);

        // onSnapshot() listener checks for any updation in database at that reference
        // the advantage of this method is it still sends a snapshot the moment our code initialise
        userRef.onSnapshot((snapshot) => {
          // snapshot object has .data method which gives all the data of the user stored in database or sign up in database currently
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
            createdAt: snapshot.data().createdAt.toDate(),
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
