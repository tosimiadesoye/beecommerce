import './layout.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const Layout = () => {
    
    return (
        <div className='layout'> 
            <main className='main'>
            </main>
          
            <div id='content' >
                <Link to='/lip-liner'>lipliner</Link>
                <Link to='/lipstick'>lipstick</Link>
                <Link to='/mascara'>mascara</Link>
                <Link to='/nail-polish'>nail-polish</Link>

            </div>
            <div id='content1' >
                <Link to='/blush'>Blush</Link>
                <Link to='/bronzer'>Bronzer</Link>
                </div>
            <div id='content2'>
                <Link to='/eyebrow'>Eyebrow</Link>
                <Link to='/eyeliner'>eyeliner</Link>
            </div>
            <div id='content3'>
            <Link to='/eyeshadow'>eyeshadow</Link>
            <Link to='/foundation'>foundation</Link>
            </div>
           
               
                <Footer />
          
            </div>
    )
}

export default Layout
