import React from 'react'
import './layout.css'
import Main from './Main'
import Content from './Content'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import Footer from './Footer'
import Navbar from './navbar/Navbar'

const Layout = () => {
    return (
        <div className='container'>
        {/* <div id="menu-toggle" className="menu-icon"> */}
              <Navbar/>  
                <Main />
                <Content />
                <Content1 />
                <Content2 />
                <Content3 />
                <Footer />
            {/* </div> */}
            </div>
    )
}

export default Layout
