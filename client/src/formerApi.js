const signinApi = (username, password) => {
    const data = {
      username: username,
      password: password
    }
    const options = {
      headers: {
        'Content-Type': 'application/json',
    }
    }
    const uri = 'http://localhost:5000/api/auth/signin/'
    axios.post(uri, data, options)
      .then(res => {
        console.log(res)
        setSignin(res)
      })
    .catch(err=> console.log("error: ", err))
  }
  
    const signupApi = async (username, email, password) => {
      const params = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username:username,
          email:email,
          password:password
        })
      
      }
 const uri = 'http://localhost:5000/api/auth/signup/'
       await fetch(`${uri}`, params)
         .then(res => res.json())
         .then(result => {
           console.log(result)
         return  setSignup(result)
         })
         .catch(error => {
           console.log('This is your error: ', error)
           
       })
     }
     
 