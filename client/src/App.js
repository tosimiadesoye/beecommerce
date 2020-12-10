import Navigation from './components/navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/auth/Signup'
import Layout from './components/Layout';
import Login from './pages/auth/Lognin'
import Profile from './pages/user/Profile';
import BoardUser from './pages/Board/BoardUser';
import Blush from './components/product-type/Blush'
import Bronzer from './components/product-type/Bronzer'
import Eyebrow from './components/product-type/Eyebrow'
import Eyeliner from './components/product-type/Eyeliner'
import Eyeshadow from './components/product-type/Eyeshadow'
import Foundation from './components/product-type/Foundation'
import LipLiner from './components/product-type/LipLiner'
import Lipstick from './components/product-type/Lipstick'
import Mascara from './components/product-type/Mascara'
import NailPolish from './components/product-type/NailPolish'
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
            <Contact/>
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
        )} />
        <Route exact path='/blush' render={() => (
          <>
            <Navigation />
            <Blush />
          </>
        )}/>
        <Route exact path='/bronzer' render={() => (
          <>
            <Navigation />
            <Bronzer />
          </>
        )} />
        <Route exact path='/eyebrow' render={() => (
          <>
            <Navigation />
            <Eyebrow />
          </>
        )} />
        <Route exact path='/eyeliner' render={() => (
          <>
            <Navigation />
            <Eyeliner />
          </>
        )} />
        <Route exact path='/eyeshadow' render={() => (
          <>
            <Navigation />
            <Eyeshadow />
          </>
        )} />
        <Route exact path='/foundation' render={() => (
          <>
            <Navigation />
            <Foundation />
          </>
        )} />
     
        <Route exact path='/lip-liner' render={() => (
          <>
            <Navigation />
            <LipLiner />
          </>
        )} />
        <Route exact path='/lipstick' render={() => (
          <>
            <Navigation />
            <Lipstick />
          </>
        )} />
        <Route exact path='/mascara' render={() => (
          <>
            <Navigation />
            <Mascara />
          </>
        )} />
        <Route exact path='/nail-polish' render={() => (
          <>
            <Navigation />
            <NailPolish />
          </>
        )} />
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