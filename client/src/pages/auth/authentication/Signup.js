import  { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import authServices from '../../../services/auth';
import './signup.css';

  
const required = value => {
  if (!value) {
    return (
      <div role='alert'>This field is required</div>
    );
  };
};

const validEmail = value => {
  if (!isEmail(value)) {
    return (
      <div role='alert'>This is not a valid Email</div>
    )
  }
}

const verifyUsername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div role='alert'>
        The username must be between 3 and 20 characters.
      </div>
    )
  }
}

const verifyPassword = (value) => {
  if (value.length < 8 || value.length > 40) {
    return (
      <div role='alert'>
        The password must be between 8 and 40 characters.
    </div>
  )
}
}


const SignUp = () => {
  const checkBtn = useRef();
  const form = useRef();

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("")


  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username)
}

const onChangeEmail = (e) => {
  const email = e.target.value;
  setEmail(email);
};

const onChangePassword = (e) => {
  const password = e.target.value;
  setPassword(password);
};
  
  const handleSignup = (e) => {
    e.preventDefault()
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    console.log(checkBtn)
    console.log(form.current.context)
    
    if (checkBtn.current.context._errors.length === 0) {
      authServices.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  }
    return (
     
      <Form className='signup-form'
        onSubmit={handleSignup}
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
          validations={[required, verifyUsername]}
          />
        

    <label htmlFor="email"><b>Email</b></label>
        <Input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          validations={[required, validEmail]}
         />

    <label htmlFor="psw"><b>Password</b></label>
        <Input type="password"
          placeholder="Enter Password"
          name="psw"
          value={password}
          onChange={onChangePassword}
          validations={[required, verifyPassword]}
           />

        {message && (
          <div>
          <div className={
            successful ? "alert alert-success" : "alert alert-danger"
          }
          role='alert'
          >
            {message}
          </div>
            <CheckButton style={{ display: 'none' }} ref={checkBtn }/>
          </div>
          
)}
        
  <div className="clearfix">
          <button type="submit" className="signupbtn">Sign Up</button>
          <p>already have an account?</p>
          <button type="submit" className="signinbtn">Sign In</button>
    </div> 
        </Form>
  
    );
  };
  
  export default SignUp;