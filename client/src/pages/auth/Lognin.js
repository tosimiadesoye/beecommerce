import { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmpty } from "validator";
import { Link } from "react-router-dom";
import "./signup.css";
import AuthServices from "../../services/auth";

const required = (value) => {
  if (isEmpty(value)) {
    return (
      <div role="alert" className="required">
        {" "}
        This field is required
      </div>
    );
  }
};

function Login(props) {
  console.log(props);
  const checkBtn = useRef();
  const form = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    // console.log(form)
    // console.log(checkBtn)

    if (checkBtn.current.context._errors.length === 0) {
      AuthServices.login(username, password).then(
        (res) => {
          //props.history is not working

          window.location.replace("/");
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };
  return (
    <Form className="signup-form" onSubmit={handleLogin} ref={form}>
      <h1 className="sign-up h1">Login</h1>
      <p>Please fill in this form to create an account.</p>

      <label htmlFor="username">
        <b>username</b>
      </label>
      <Input
        className="input"
        type="text"
        placeholder="Enter username"
        name="username"
        value={username}
        onChange={onChangeUsername}
        validations={[required]}
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
        validations={[required]}
      />
      {loading && <span className="spinner-border spinner-border-sm"></span>}
      <button type="submit" className="button">
        Login
      </button>

      {message && (
        <div
          className={"" ? "alert alert-success" : "alert alert-danger"}
          role="alert"
        >
          {message}
        </div>
      )}

      <CheckButton style={{ display: "none" }} ref={checkBtn} />

      <div>
        <Link to="/signup">Don't have an account?</Link>
      </div>
    </Form>
  );
}

export default Login;
