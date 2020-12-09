import Navigation from './components/navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/auth/Signup'
import Layout from './components/Layout';
import axios from 'axios';
import Login from './pages/auth/Lognin'
import './App.css';
import Content from './components/Content';
import Profile from './pages/user/Profile';
import BoardUser from './pages/Board/BoardUser'

function App() {
 



  return (
<BrowserRouter>
<Switch>
        <Route exact path={['/', '/home'] } render={() => (
          <>
              <Navigation/>  
            <Layout />
          </>
        )} />
        <Route path='/shop' render={() => (
          <>
            <Navigation />
            <Shop/>
            </>
        )} />
        <Route path='/services' render={() => (
          <>
            <Navigation />
            <Services/>
            </>
        )} />
        <Route path='/contact-us' render={() => (
          <>
            <Navigation /> 
            <Content/>
            </>
        )} />
        <Route path='/signup' render={() => (
          <>
            <Navigation/>
            <Signup />
            </>
        )} />
         <Route path='/login' render={() => (
          <>
            <Navigation/>
            <Login/>
            </>
        )} /> 
        <Route exact path="/profile" render={() => (
           <>
           <Navigation/>
           <Profile/>
           </>
        )} />
        <Route exact path="/user" render={() => (
           <>
           <Navigation/>
           <BoardUser/>
           </>
        )} />
        <Route exact path="/mod" render={() => (
           <>
           <Navigation/>
           <Profile/>
           </>
        )} />
        <Route exact path="/admin" render={() => (
           <>
           <Navigation/>
           <Profile/>
           </>
        )}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


     
        {/* <Switch>
         
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
        </Switch>
      <Switch> */}