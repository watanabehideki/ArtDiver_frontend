import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom' 

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
  

const ModalWrapper = styled.div`
  width: 500px;
  height: 200px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const CloseModal = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 37px;
  height: 32px;
  padding: 0;
  z-index: 10;
`
const ModalContent = styled.div`
  display: fex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 15px;
    position: absolute;
    top: 10px;
    padding: 40px;
    line-height: 1.8;
    letter-spacing: 0.07em;

  }
  `
const LoginBtn = styled.button`
  padding: 10px 50px;
  position: absolute;
  bottom: 30px;
  left: 50px;
  background: #000;
  border-radius: 10px;
  outline: none;
`

 const LoginBtnLink = styled(Link)`
  text-decoration: none;
  color: #fff;
 `
 const SignupBtn = styled.button`
  padding: 10px 50px;
  position: absolute;
  bottom: 30px;
  right: 50px;
  background: #f55367;
  border-radius: 10px;
  outline: none;
`

const SignupBtnLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`


export const Modal = ({showModal, setShowModal}) => {
  return (
    <>
      { showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <CloseModal aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
            <ModalContent>
              <p>新規登録すると「展覧会のお気に入り」や「美術館・ギャラリーのフォロー」など無料で利用できます。</p>
              <LoginBtn>
                <LoginBtnLink to='/login' onClick={() => setShowModal(prev => !prev)}>ログイン</LoginBtnLink>
              </LoginBtn>
              <SignupBtn>
                <SignupBtnLink to='/signup' onClick={() => setShowModal(prev => !prev)}>新規登録</SignupBtnLink>
              </SignupBtn>

            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  ) 
}
