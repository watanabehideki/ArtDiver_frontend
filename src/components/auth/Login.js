import React, { useState } from 'react'
import axios from 'axios'

export default function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        axios.post("http://localhost:4001/login",
          {
            user: {
              email: email,
              password: password,
            }
          },
          { withCredentials: true }
        ).then(response => {
          if (response.data.logged_in) { //戻り値logged_inがtrueか検証
            props.handleSuccessfulAuthentication(response.data) //ログイン成功ならユーザーデータをイベントハンドラにpropsで渡す
        }
        }).catch(error => {
            console.log("registration error", error)
        })
        event.preventDefault()
    }
    return (
        <div>
            <p>ログイン</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button type="submit">ログイン</button>
            </form>
        </div>
    )
}