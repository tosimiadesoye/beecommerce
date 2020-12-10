import AuthServices from '../../services/auth';
 import Home from '../Home'

const Profile = () => {
  const currentUser = AuthServices.getCurrentUser(); 
  // console.log(currentUser.username)
  // console.log(currentUser.id)
  // console.log(currentUser.email)
  // console.log(currentUser.accessToken)
    return (
      <div>
         <Home/> 
            <header>
                <h3>
                    <strong>
                        {currentUser.username}
                    </strong>'s Profile
                </h3>
                 <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p> 
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
              currentUser.roles.map((role, index) => {
                // console.log(role)
                return(<li key={index}>{role}</li>)
              })}
      </ul>
</header>
    </div>
    )
}

export default Profile