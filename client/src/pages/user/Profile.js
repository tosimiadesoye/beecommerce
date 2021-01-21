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
          <strong>Email:</strong> {currentUser.email}
        </p>
      </header>
    </div>
  );
};

export default Profile;
