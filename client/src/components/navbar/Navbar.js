import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthService from "../../services/auth";
import { Dropdown } from "./Dropdown";
import DropdownRender from "./Dropdown";

const Navigation = ({ makeupType, setType, fixed }) => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      // console.log(user.username)
      //console.log(user.roles)
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-transparent rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <Link
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black"
                  to="/"
                >
                  Logo
                </Link>
                <button
                  className="text-black cursor-pointer text-xl leading-none px-3 
                  py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <Dropdown makeupType={makeupType} color="white" />
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-black uppercase font-bold leading-snug text-black hover:opacity-75"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-black uppercase font-bold leading-snug text-black hover:opacity-75"
                      to="/cart"
                    >
                      Cart
                    </Link>
                  </li>
                  {currentUser ? (
                    <div>
                      <li className="nav-item">
                        <Link
                          to={"/profile"}
                          className="px-3 py-2 flex items-center text-black uppercase font-bold leading-snug text-black hover:opacity-75"
                        >
                          {currentUser.username}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/login"
                          className="px-3 py-2 flex items-center text-black uppercase font-bold leading-snug text-black hover:opacity-75"
                          onClick={logOut}
                        >
                          Logout
                        </Link>
                      </li>
                    </div>
                  ) : (
                    <div className="Navigation-nav ml-auto">
                      <li className="nav-item">
                        <Link
                          to={"/login"}
                          className="px-3 py-2 flex items-center text-black uppercase font-bold leading-snug text-black hover:opacity-75"
                        >
                          Login
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to={"/signup"}
                          className="px-3 py-2 flex items-center text-black uppercase font-bold leading-snug text-black hover:opacity-75"
                        >
                          Sign Up
                        </Link>
                      </li>
                    </div>
                  )}
                  {/* <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-black uppercase font-bold leading-snug text-black hover:opacity-75"
                      href="#pablo"
                    >
                      Settings
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
