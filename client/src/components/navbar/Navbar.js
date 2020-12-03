import { Link} from 'react-router-dom' 
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav role='navigation' className='nav'>
                <div className='nav-list'>
                  <div className='home'>
                        <Link to='/'>
                            Logo
                        </Link>
                    </div>
                  <div className='nav-'>
                        <Link to="/shop" className='a'>
                            Shop
                        </Link>
                    </div>
                  <div className='nav-item'>
                        <Link to="/services" className='a'>
                        Services
                        </Link>
                    </div>
                  <div className='nav-item'>
                        <Link to="/contact-us" className='a' >
                        Contact us
                        </Link>
                    </div>
                  <div className='nav-item'>
                        <Link to="/sign-up" className='a' >
                        Sign up
                        </Link>
                    </div>
                  <div className='nav-item'>
                        <Link to="/signin" className='a'>
                        Sign in
                        </Link>
                    </div>
                    
                </div>
            </nav>  
        </>
    )
}

export default Navbar
