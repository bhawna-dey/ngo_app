import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { Button } from './Button';
import './Navbar.css';



const Navbar = () => {
    const [click, setClick]=useState(false);
    const[button,setButton]=useState(true);

    const handleClick=()=> setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const showButton=()=>{
        if(window.innerwidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

  return (
      <>
      <nav className="navbar">
          <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  SMILE <i className="fab fa-typo3" />
               </Link>
               <div className='menu-icon' onClick={handleClick}>
                   <i className={click ? 'fas fa-times':'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/userprofile' className='nav-links' onClick={closeMobileMenu}>
                            Profile
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='/help' className='nav-links' onClick={closeMobileMenu}>
                            Help Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Donate</Button>}
            </div>
      </nav>
      </>
  )
}

export default Navbar