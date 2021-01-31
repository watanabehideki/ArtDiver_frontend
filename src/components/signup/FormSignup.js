import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useForm from './useForm'
import validate from './validateInfo'

const FormSignup = ({submitForm}) => {
  const { handleChange, handleSubmit, values, errors } 
  = useForm(
    submitForm,
    validate
    )
  
  return (
    <div className='signup-form-wrap'>
      <form  onSubmit={handleSubmit} className='signup-form'>
        <div className='signup-form-contents'>

          <h2>ログイン情報の登録</h2>
          <br/>
          <p>仮登録を行います。
            <p>入力したメールアドレス宛てに本登録用のURLを記載したメールを送ります。</p>
          </p>
          <div className='signup-form-inputs'>
            <label htmlFor='email' className='form-label'>
              メールアドレス
            </label>
            <input 
              id='email'
              type='email' 
              name='email' 
              className='form-input' 
              placeholder='メールアドレス'
              value={values.email}
              onChange={handleChange}
              />
              <div className='error-message'>
                {errors.email && <p>{errors.email}</p> }
              </div>

          </div>
          <div className='signup-form-inputs'>
            <label htmlFor='password' className='form-label'>
              パスワード(半角英数字で6文字以上)
            </label>
            <input 
              id='password'
              type='password' 
              name='password' 
              className='form-input' 
              placeholder='パスワード'
              value={values.password}
              onChange={handleChange}/>
              <div className='error-message'>
                {errors.password && <p>{errors.password}</p> }
              </div>

          </div>
          <button type='submit' className='signup-form-button'>登録</button>
          <span />
          <p>既にアカウントをお持ちの方は<Link to='/login'>こちら</Link></p>
        </div>
      </form>
    </div>
  )
}

export default FormSignup
