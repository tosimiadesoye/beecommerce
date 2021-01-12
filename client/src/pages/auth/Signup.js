import { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isEmpty } from "validator";
import { Link } from "react-router-dom";

import authServices from "../../services/auth";
import "./signup.css";

const required = (value) => {
  if (isEmpty(value)) {
    return (
      <div role="alert" className="required">
        This field is required
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div role="alert" className="required">
        This is not a valid Email
      </div>
    );
  }
};

const verifyUsername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div role="alert" className="required">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const verifyPassword = (value) => {
  if (value.trim().length < 8) {
    return (
      <div role="alert" className="required">
        The password must be at least 8 characters long
      </div>
    );
  }
};

const Signup = () => {
  const checkBtn = useRef();
  const form = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    //setting username input as the value for username
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    //setting email input as the value for email
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    //setting password input as the value for password
    const password = e.target.value;
    setPassword(password);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      authServices.register(username, email, password).then(
        (response) => {
          
          setMessage(response.data.message);
          setSuccessful(true);
          
        },
        (error) => {
          console.log(error.response.data);
          console.log(error.message);
          const responseMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(responseMessage);
          setSuccessful(false);
        }
      );
    }
  };
  return (
    <Form className="signup-form" onSubmit={handleSignup} ref={form}>
      <h1 className="sign-up h1">Sign Up</h1>
      <p>Please fill in this form to create an account.</p>

      <label htmlFor="username">
        <b>Username</b>
      </label>
      <Input
        className="input"
        type="text"
        placeholder="Enter username"
        name="username"
        value={username}
        onChange={onChangeUsername}
        validations={[required, verifyUsername]}
      />

      <label htmlFor="email">
        <b>Email</b>
      </label>
      <Input
        className="input"
        type="text"
        placeholder="Enter Email"
        name="email"
        value={email}
        onChange={onChangeEmail}
        validations={[required, validEmail]}
      />

      <label htmlFor="password">
        <b>Password</b>
      </label>
      <Input
        type="password"
        className="input"
        placeholder="Enter Password"
        name="password"
        value={password}
        onChange={onChangePassword}
        validations={[required, verifyPassword]}
      />

      {message && (
        <div
          className={successful ? "alert alert-success" : "alert alert-danger"}
          role="alert"
        >
          {message}
        </div>
      )}
      <button type="submit" className="button">
        Sign Up
      </button>
      <CheckButton style={{ display: "none" }} ref={checkBtn} />

      <div>
        <Link to="/login">Already have an account? </Link>
      </div>
    </Form>
  );
};

export default Signup;
