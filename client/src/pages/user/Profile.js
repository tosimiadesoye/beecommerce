import { getCurrentUser } from "../../services/auth";
import { Redirect } from "react-router-dom";

const Profile = () => {
  const currentUser = getCurrentUser();
  if (JSON.parse(localStorage.getItem("user")) === null) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="text-center">
      <header>
        <h3>
          <strong>{currentUser.username}</strong>'s Profile
        </h3>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => {
              
              return <li key={index}>{role}</li>;
            })}
        </ul>
      </header>
    </div>
  );
};

export default Profile;
