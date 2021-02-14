import { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isEmpty } from "validator";
import { Link } from "react-router-dom";

import { register } from "../../services/auth";

const required = (value) => {
  if (isEmpty(value)) {
    return (
      <div role="alert" className="text-red-500">
        This field is required
      </div>
    );
  }
};

export const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div role="alert" className="text-red-500">
        This is not a valid Email
      </div>
    );
  }
};

const verifyUsername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div role="alert" className="text-red-500">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const verifyPassword = (value) => {
  if (value.trim().length < 8) {
    return (
      <div role="alert" className="text-red-500">
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
      register(username, email, password).then(
        (response) => {
          if (response.data.message) {
            setMessage(response.data.message);
            setSuccessful(true);
            window.location.replace("/login");
          }
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
    <Form
      className="flex flex-col container bg-black rounded text-white items-center justify-center align-center"
      style={{ width: "340px", height: "680px" }}
      onSubmit={handleSignup}
      ref={form}
    >
      <h1 className="text-5xl font-normal leading-normal text-purple-400 mb-5 border-purple-400 border-b-2 ">
        Sign Up
      </h1>
      <div className="text-center mb-2">
        <p >Please fill in this form to create an account.</p>
      </div>

      <label htmlFor="username">
        <b>Username</b>
      </label>
      <Input
        className="border-b bg-black my-1 placeholder-white::placeholder"
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
        className="border-b bg-black my-1 placeholder-white::placeholder"
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
        className="border-b bg-black my-1 placeholder-white::placeholder"
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
      <button
        type="submit"
        className="bg-transparent border text-purple-400 border-purple-400
       my-5 active:bg-black font-bold uppercase text-base px-8 py-2
         shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      >
        Sign Up
      </button>
      <CheckButton style={{ display: "none" }} ref={checkBtn} />

      <div>
        <Link
          to="/login"
          className="text-white active:bg-black font-bold uppercase text-base px-8 py-3
            shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        >
          Already have an account?{" "}
        </Link>
      </div>
    </Form>
  );
};

export default Signup;
