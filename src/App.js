import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Home from './pages'
import Login from './pages/Login'
import Signup from './pages/Signup'

import Navbar from './components/Navbar'

function App() {

  // const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
  // const [user, setUser] = useState({})

  // const handleLogin = (data) => {
  //   setLoggedInStatus("ログイン中")
  //   setUser(data.user)
  // }

  // const handleLogout = () => {
  //   setLoggedInStatus("未ログイン")
  //   setUser({})
  // }

  // useEffect(() => { //リロードする度　呼び出す
  //   checkLoginStatus()
  // })

  // const checkLoginStatus = () => {
  //   axios.get("http://localhost:4001/logged_in", 
  //   { withCredentials: true }
  //   ).then(response => {
  //     if (response.data.logged_in && loggedInStatus === "未ログイン") {  
  //       setLoggedInStatus("ログイン中") //logged_inがtrueなら"ログイン中"に書き換え、ユーザー情報をセットする
  //       setUser(response.data.user)
  //     } else if (!response.data.logged_in && loggedInStatus === "ログイン中") {
  //       setLoggedInStatus("未ログイン") //logged_inがfalseなら"未ログイン"に書き換え、ユーザー情報も空にする
  //       setUser({})
  //     }
  //   }).catch(error => {
  //     console.log("ログインエラー", error)
  //   })
  // }
  const currentUser = function() {
    const user = localStorage.getItem('user')
    return(user)
  }

  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route 
            exact path={"/"}
            render={props => (
              <Home /> //Home.js内のloggedInStatusという変数に、App.jsのloggedInStatus変数を代入
            )}
          />
          <Route path='/login' 
          render={props => (
            <Login />
          )}
          />
          <Route path='/signup' 
          render={props => (
            <Signup />
          )}
          />

        </Switch>
      </BrowserRouter>
  )
}

export default App