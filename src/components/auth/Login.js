import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (event) => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_URL}/auth/sign_in`,
      data: {
        email: email,
        password: password
      }
    })
    .then(response => {
      console.log(response)
      localStorage.setItem('user',
        JSON.stringify({
          'access-token': response.headers['access-token'],
          'client': response.headers['client'],
          'uid': response.data.data.uid,
          'id': response.data.data.id
      }))
      window.location = '/' 
    }).catch(errors => {
      errors =errors.response.data.errors
       console.log(errors)
      })
  }
  return (
    <div　 className='login-form-container'>
      <div className='login-form-wrap'>
        <form onSubmit={handleLogin}  className='login-form'>
          <div className='login-form-contents'>
            <h2>ログイン</h2>
            <div className='login-form-inputs'>
              <label>メールアドレス</label>
              <input
                type="email"
                name="email"
                placeholder="メールアドレス"
                value={email}
                onChange={event => setEmail(event.target.value)}
                className='login-form-input'
              />
            </div>
            <div className='login-form-inputs'>
              <label>パスワード</label>
              <input
                type="password"
                name="password"
                placeholder="パスワード"
                value={password}
                onChange={event => setPassword(event.target.value)}
                className='login-form-input'
              />
            </div>    
          <button type="submit" className='login-form-button'>ログイン</button>
        </div>
      </form>
      </div>
    </div>
  )
}
export default Login