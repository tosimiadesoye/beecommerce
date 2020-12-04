import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/auth/authentication/Signup'
import Layout from './components/Layout';
import axios from 'axios';
import Login from './pages/auth/authentication/Lognin'
import './App.css';
import Content from './components/Content';
import Profile from './pages/auth/user/Profile';

function App() {
 



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
        <Route exact path="/profile" render={() => (
           <>
           <Navbar/>
           <Profile/>
           </>
        )}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


     
        {/* <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
        
      
          
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
        </Switch>
      <Switch> */}