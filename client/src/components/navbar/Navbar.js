import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthService from "../../services/auth";
import { Container } from "reactstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CustomDropdown from "./Dropdown";
import "./navbar.css";

const dropdownConfig = [
  {
    customKey: 1,
    options: [
      { title: "Shop", header: true },
      { title: "Shop all", header: false },
      // { title: "Blush", header: false },
    ],
    name: "dropdownOpen1",
  },
];

const Navigation = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [keysForDropdown, setKeysForDropdown] = useState({});

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

  useEffect(() => {
    const keys = dropdownConfig.map((dropdown) => dropdown.name); //loopinf through the dropdownConfig above
    const object = keys.reduce((accumulator, currentValue) => {
      accumulator[currentValue] = false; //currentValue is name

      return accumulator;
    }, {});
    setKeysForDropdown({ ...object });
  }, []);

  const _handleToggle = (e) => {
    setKeysForDropdown({
      ...keysForDropdown,
      [e.target.name]: !keysForDropdown[e.target.name],
    });
  };

  const _handleMouseEnter = (e) => {
    setKeysForDropdown({
      ...keysForDropdown,
      [e.target.name]: !keysForDropdown[e.target.name],
    });
  };

  const _handleMouseLeave = (e) => {
    setKeysForDropdown({
      ...keysForDropdown,
      [e.target.name]: !keysForDropdown[e.target.name],
    });
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link as={Link} to="/shop">Shop</Nav.Link> */}
            <Container>
              {keysForDropdown &&
                dropdownConfig.map((dropdown) => (
                  <CustomDropdown
                    {...dropdown}
                    key={dropdown.customKey}
                    stateKeys={keysForDropdown}
                    handleToggle={_handleToggle}
                    handleMouseLeave={_handleMouseLeave}
                    handleMouseEnter={_handleMouseEnter}
                  ></CustomDropdown>
                ))}
            </Container>

            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>

            {/* 
          {showModeratorBoard && (
            <div >
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </div>
          )} */}

            {/* {showAdminBoard && (
            <div >
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </div>
          )} */}

            {currentUser && (
              <div>
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </div>
            )}

            {/* if you can access user.username - nav should logout else it should be login or sign up */}
            {currentUser ? (
              <div>
                <div>
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </div>
                <div>
                  <a href="/login" className="nav-link" onClick={logOut}>
                    LogOut
                  </a>
                </div>
              </div>
            ) : (
              <div className="Navigation-nav ml-auto">
                <div>
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </div>

                <div>
                  <Link to={"/signup"} className="nav-link">
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
