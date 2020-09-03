import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

import { auth, createUserProfile } from "./firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

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
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
                createdAt: snapshot.data().createdAt.toDate(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
