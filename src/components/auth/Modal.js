import React from 'react'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom' 
import './Modal.css'

export const Modal = ({showModal, setShowModal}) => {
  return (
    <>
      { showModal ? (
        <div className='modal-background'>
          <div className='modal-wrap' showModal={showModal}>
            <MdClose className='close-modal'aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
            <div className='modal-contents'>
              <div className='modal-text'>新規登録すると、ギャラリーのフォロー機能や、展覧会への感想などを投稿機能などご利用できます。</div>
              <div className='modal-buttons'>
                <Link className='login-btn-link' to='/login' onClick={() => setShowModal(prev => !prev)}>
                  <button className='login-btn'>ログイン</button>
                </Link>
                <Link className='signup-btn-link' to='/signup' onClick={() => setShowModal(prev => !prev)}>
                  <button className='signup-btn'>新規登録</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  ) 
}
