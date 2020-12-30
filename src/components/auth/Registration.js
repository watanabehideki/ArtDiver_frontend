import React, { useState } from 'react'
import axios from 'axios'

export default function Registration(props) {
    // useState()を用いて、ユーザーデータの初期値（空の文字列）を定義
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = (event) => {
        axios.post("http://localhost:4001/signup",
            {
                user: {
                    email: email,
                    password: password,
                    password_confirmation: passwordConfirmation
                }
            },
            { withCredentials: true } //データにcookieを含める
            ).then(response => {
                if (response.data.status === 'created') { //backendからの戻り値にcreatedが含まれているか検証
                    props.handleSuccessfulAuthentication(response.data) //検証成功ならイベントハンドラにデータをpopsで渡す
                }
            }).catch(error => {
                console.log("registration error", error)
            })    
            event.preventDefault()
        }

    return (
        <div>
           <p>新規登録</p>

            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="メールアドレス" value={email}
                onChange={event => setEmail(event.target.value)} />

                <input type="password" name="password" placeholder="パスワード" value={password}
                onChange={event => setPassword(event.target.value)} />

                <input type="password" name="password_confirmation" placeholder="確認用パスワード" value={passwordConfirmation}
                onChange={event => setPasswordConfirmation(event.target.value)} />

                <button type="submit">登録</button>
            </form>
        </div>
    )
}