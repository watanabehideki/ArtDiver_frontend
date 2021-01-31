import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Signup.css'

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }

  return (
    <div className='signup-form-container'>
        {!isSubmitted ? 
        <FormSignup submitForm={submitForm} />
          :
        <FormSuccess />
        }
    </div>
  )
}

export default Signup
