import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route, Redirect, } from 'react-router-dom'

import Home from './components/pages'
import Login from './components/auth/Login'
import Navbar from './components/Navbar'
import Galleries from './components/pages/Galleries'
import Gallery from './components/pages/Gallery'
import Exhibitions from './components/pages/Exhibitions'
import Exhibition from './components/pages/Exhibition'
import Message from './components/pages/Message'
import Signup from './components/signup/Signup'
import Mypage from './components/pages/MyPage'


function App() {
  const currentUser = localStorage.getItem('user')
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/galleries">
            <Galleries />
          </Route>
          <Route exact path="/galleries/:id">
            <Gallery />
          </Route>
          <Route exact path='/exhibitions'>
            <Exhibitions />
          </Route>
          <Route exact path='/exhibitions/:id'>
            <Exhibition />
          </Route>
          <Route exact path='/message/:id'>
            <Message />
          </Route>
          <Route exact path="/login">
            {currentUser ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/signup">
            {currentUser ? <Redirect to="/" /> : <Signup />}
          </Route>
          <Route exact path='/mypage'>
            {!currentUser ? <Redirect to="/" /> : <Mypage />}
          </Route>
        </Switch>
      </BrowserRouter>
      </>
  )
}

export default App