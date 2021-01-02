import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About us</h2>
            <Link to='/'>How...</Link>
            <Link to='/'>Test...</Link>
          </div>
          <div class='footer-link-items'>
            <h2>About us</h2>
            <Link to='/'>How...</Link>
            <Link to='/'>Test...</Link>
          </div>

        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>SNS</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Tiwitter</Link>
          </div>
          <div class='footer-link-items'>
            <h2>SNS</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Tiwitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              ARTDIVER
            </Link>
          </div>
          <small class='website-rights'>ARTDIVER ©️ 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              < FaFacebookF />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              < FaInstagram />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              < FaTwitter />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
