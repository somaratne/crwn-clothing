import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "./../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: "", password: "" }
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    const data = { ...this.state.data };
    try {
      await auth.signInWithEmailAndPassword(data.email, data.password);
      this.setState({
        data: {
          email: "",
          password: ""
        }
      });
    } catch (error) {
      console.error(error);
    }
    console.log("Submitted");
  };
  handleChange = ({ currentTarget: input }) => {
    const data = this.state.data;
    data[input.name] = input.value;
    this.setState({ data });
  };
  render() {
    const { email, password } = this.state.data;
    return (
      <div className="sign-in">
        <h2>I Already Have an Account</h2>
        <span>Sign In With Your Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            name="email"
            value={email}
            type="email"
            onHandleChange={this.handleChange}
            required
          />
          <FormInput
            label="password"
            name="password"
            value={password}
            type="password"
            onHandleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
