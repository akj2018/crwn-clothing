import React from "react";

// import "./sign-up.styles.scss";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfile } from "../../firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords Don't Matched");
      return;
    }

    try {
      // user property is the userAuth required in createUserProfile()
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // wait for profile to get created and current user updation in app.js
      await createUserProfile(user, { displayName: username });

      // then finally clear out the form
      this.setState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { username, password, confirmPassword, email } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I Don't Have An Account</SignUpTitle>
        <span>Sign Up with Email and Password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            label="Username"
            type="text"
            name="username"
            required
            value={username}
            handleChange={this.handleChange}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
