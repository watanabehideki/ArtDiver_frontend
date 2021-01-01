import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Button } from './Button'
import './Navbar.css'


function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else{
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton)

  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          ARTDIVER
        </Link>
        <div className='menu-icon' onClick={handleClick} >
          <i>
          {click ? <AiOutlineClose /> : <BiMenu />}
          </i>
        </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                ログイン
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                新規登録
              </Link>
            </li>
          </ul>
          {button &&<Button buttonStyle='btn--outline'>新規登録</Button>}
      </div>
    </nav>
    </>
  )
}

export default Navbar
