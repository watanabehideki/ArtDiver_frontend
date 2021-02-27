import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BiMenu, BiUser } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import './Navbar.css'
import LoginModalLink from './auth/LoginModalLink'


function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)


  const handleSignOut = (event) => {
    event.preventDefault();
    axios({
      method: 'DELETE',
      url:`${process.env.REACT_APP_BACKEND_URL}/auth/sign_out`,
      data: JSON.parse(localStorage.user)
    })
    .then(() => {
      localStorage.removeItem('user')
      window.location = '/'
    })
  }
  const currentUser = localStorage.getItem('user')



  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          ARTDIVER
        </Link>
        { currentUser ?
        <>
          <Link to='/mypage' className='mypage-logo'>
            <BiUser />
          </Link>
        </>
        :
          <LoginModalLink />
        }

        <div className='menu-icon' onClick={handleClick} >
          <i>
          {click ? <AiOutlineClose /> : <BiMenu />}
          </i>
        </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/exhibitions' className='nav-links' onClick={closeMobileMenu}>
                EXHIBITIONS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/galleries' className='nav-links' onClick={closeMobileMenu}>
                GALLERIES
              </Link>
            </li>
            { currentUser &&
            <> 
            <li className='nav-item'>
              <Link to='/logout' className='nav-links' onClick={closeMobileMenu && handleSignOut}>
                ログアウト
              </Link>
            </li>
            </>
            }
          </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
