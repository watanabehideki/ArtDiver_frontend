import React, { useState } from 'react'
import { Modal } from './Modal'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function LoginModalLink() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const LoginStyled = styled(Link)`
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    position: absolute;
    top: 1.7rem;
    right: 5rem;
  `;

  return(
    <>
      <LoginStyled to='#' onClick={openModal}>
        ログイン
      </LoginStyled>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
    </>
  )
}

export default LoginModalLink