import { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmpty } from "validator";
import { Link } from "react-router-dom";
// import "./signup.css";
import { login } from "../../services/auth";

const required = (value) => {
  if (isEmpty(value)) {
    return (
      <div role="alert" className="text-red-500">
        {" "}
        This field is required
      </div>
    );
  }
};

function Login() {
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

    if (checkBtn.current.context._errors.length === 0) {
      login(username, password).then(
        (res) => {
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
    <Form
      className="flex flex-col container bg-black rounded text-white items-center justify-center align-center"
      style={{ width: "340px", height: "485px" }}
      onSubmit={handleLogin}
      ref={form}
    >
      <h1 className="text-5xl font-normal leading-normal text-purple-400 border-purple-400 border-b-2 ">Login</h1>
      <div className='text-center'>
      <p>Please fill in this form to create an account.</p>
      </div>
      

      <label htmlFor="username">
        <b>username</b>
      </label>
      <Input
        className="border-b bg-black placeholder-white::placeholder"
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
        className="border-b bg-black placeholder-white::placeholder"
        placeholder="Enter Password"
        name="password"
        value={password}
        onChange={onChangePassword}
        validations={[required]}
      />
      {loading && <span className="spinner-border spinner-border-sm"></span>}
      <button
        className="bg-transparent  text-purple-400 border border-purple-400
 my-5 active:bg-black font-bold uppercase text-base px-8 py-3
   shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      >
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
        <Link
          to="/signup"
          className="text-white active:bg-black font-bold uppercase text-base px-8 py-3
            shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        >
          Don't have an account?
        </Link>
      </div>
    </Form>
  );
}

export default Login;
