import React from 'react'
import { Link } from 'react-router-dom'
import './MessageLinkButton.css'

function MessageLinkButton(props) {
  return (
    <>
    <Link to={`/message/${props.id}`} >
      <button className='message-link-button-layout'>ご意見・ご感想等</button>
    </Link>
    </>
  )
}

export default MessageLinkButton
