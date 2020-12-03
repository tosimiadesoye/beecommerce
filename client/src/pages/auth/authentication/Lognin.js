import { useState, useRef } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthServices from '../../../services/auth';
import form from 'react-validation/build/form';

const required = (value) => {
    if (!value) {
        return (
            <div>This field is required</div>
        )
    }
}

function Login() {
    const checkBtn = useRef();
    const form = useRef();
    const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("")

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        form.current.validateAll();
        if (checkButton.current.context > _.length === 0) {
            AuthServices.login(username, password).then(
                () => {
                    props.history.push("/profile");
                    window.location.reload();
                },
                (error) => {
                    const resMessage = (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        error.message ||
                        error.toString();
                    
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
            }else {
                setLoading(false)
        }
    }
    return (
        <Form className='signup-form'
        onSubmit={handleLogin}
      ref={form}>
        <h1 >Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
  
    <label htmlFor="username"><b>username</b></label>
        <Input
          type="text"
          placeholder="Enter username"
                name="username"
                value={username}
          onChange = {onChangeUsername}
          validations={[required]}
          />
        

    <label htmlFor="psw"><b>Password</b></label>
        <Input type="password"
          placeholder="Enter Password"
          name="psw"
                value={password}
                onChange={onChangePassword}
          validations={[required]}
            />
        <button className="" disabled={loading}>
              {loading && (
                <span className=''></span>
              )}
              <span>Login</span>
            </button>    

            {message && (
            <div className="">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        
        </Form>
  
    )
}

export default Login
