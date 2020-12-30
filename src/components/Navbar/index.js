import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import axios from 'axios'

const Navbar = () => {
  const handleSignOut = (event) => {
    event.preventDefault();
    axios({
      method: 'DELETE',
      url: 'http://localhost:4001/auth/sign_out',
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
      <Nav>
        <NavLink to='/'>
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>

          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          {!currentUser &&
          <>
          <NavLink to='/signup' activeStyle>
            新規登録
          </NavLink>
          </>}
        </NavMenu>

        <NavBtn>
        {!currentUser &&
        <>
          <NavBtnLink to='/login'>ログイン</NavBtnLink>
        </>}
        </NavBtn>

        <NavBtn >
        {currentUser && 
        <>
          <NavBtnLink onClick={handleSignOut} to='#'>ログアウト</NavBtnLink>
        </>}
        </NavBtn> 
      </Nav>
    </>
  )
}

export default Navbar
