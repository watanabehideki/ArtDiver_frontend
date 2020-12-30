import React from 'react'
import Registration from '../components/auth/Registration'
import Login from '../components/auth/Login'
import axios from 'axios'

const Home = (props) => {

    const handleSuccessfulAuthentication = (data) => { //ユーザー情報を引数で渡す
        props.handleLogin(data)
    }

    const handleLogoutClick = () => {
        axios.delete("http://localhost:4001/logout", 
        { withCredentials: true }
        ).then(response => {
            props.handleLogout()
        }).catch(error => console.log("ログアウトエラー", error))
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}
        >
            <h1>Home</h1>
            {/* <h2>ログイン状態: {props.loggedInStatus}</h2>
            <Registration handleSuccessfulAuthentication={handleSuccessfulAuthentication} /> 
            <Login handleSuccessfulAuthentication={handleSuccessfulAuthentication} /> */}
        </div>
    )
}

export default Home