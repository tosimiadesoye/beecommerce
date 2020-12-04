import Navbar from './components/navbar/Navbar';
import {useState, useEffect} from 'react' 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/auth/authentication/Signup'
import Layout from './components/Layout';
import axios from 'axios';
import Login from './pages/auth/authentication/Lognin'
// import Navbar from './components/navbar/Navbar'
import './App.css';
import Content from './components/Content';

function App() {
  /*const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };*/



  return (
<BrowserRouter>
<Switch>
        <Route exact path='/' render={() => (
          <>
            {/* <Navbar/> */}
            <Layout />
          </>
        )} />
        <Route path='/shop' render={() => (
          <>
            <Navbar />
            <About/>
            </>
        )} />
        <Route path='/services' render={() => (
          <>
            <Navbar />
            <Services/>
            </>
        )} />
        <Route path='/contact-us' render={() => (
          <>
            <Navbar /> 
            <Content/>
            </>
        )} />
        <Route path='/signup' render={() => (
          <>
            <Navbar/>
            <Signup />
            </>
        )} />
         <Route path='/login' render={() => (
          <>
            <Navbar/>
            <Login/>
            </>
        )} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;

{/* <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          bezKoder
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav> */}
     
        {/* <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
        </Switch>
      <Switch> */}