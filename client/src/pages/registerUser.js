import { useState } from 'react';

import './signup.css'

const SignUp = ({ signup, signupApi }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  console.log(signup)
  const handleSignup = (e) => {
    e.preventDefault()
    signupApi(username, email, password)
   
  }
    return (
     
      <form className='signup-form' onSubmit={handleSignup}>
        <h1 >Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
  
    <label for="username"><b>username</b></label>
        <input type="text"
          placeholder="Enter username"
          name="username"
          
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          />
        {errors.username&&<span>User name is required</span>}

    <label for="email"><b>Email</b></label>
        <input type="text"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
         />

    <label for="psw"><b>Password</b></label>
        <input type="password"
          placeholder="Enter Password"
          name="psw"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
           />

    {/* <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/> */}

    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>

   

    <div className="clearfix">
      
          <button type="submit" className="signupbtn">Sign Up</button>
          <p>already have an account?</p>
          <button type="submit" className="signinbtn">Sign In</button>
    </div>
        </form>
  
    );
  };
  
  export default SignUp;