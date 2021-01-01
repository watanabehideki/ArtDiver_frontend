import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar2 from './components/Navbar2'


function App() {

  const currentUser = function() {
    const user = localStorage.getItem('user')
    return(user)
  }

  return (
      <BrowserRouter>
        <Navbar2 />
        <Switch>
          <Route 
            exact path={"/"}
            render={props => (
              <Home /> 
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