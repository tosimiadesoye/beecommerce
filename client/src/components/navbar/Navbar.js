import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthService from "../../services/auth";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = ({ makeupType, setType }) => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

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
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Shop" id="collasible-nav-dropdown">
              <Nav.Link as={Link} to="/shop">
                Shop all
              </Nav.Link>
              {makeupType && (
                <div>
                  {makeupType.map((type, idx) => (
                    <NavDropdown.Item
                      key={idx}
                      as={Link}
                      to={`/type/${type}`}
                      
                    >
                      {type}
                    </NavDropdown.Item>
                  ))}
                </div>
              )}
            </NavDropdown>
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>

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
                    Logout
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
