import './layout.css'
import Content from './Content'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import Footer from './Footer'
import Navigation from './navbar/Navbar'



const Layout = () => {
    
    return (
        <div className='layout'> 
            <main className='main'>
            </main>
          
                <Content />
                <Content1 />
                <Content2 />
                <Content3 />
                <Footer />
          
            </div>
    )
}

export default Layout
