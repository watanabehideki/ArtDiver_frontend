import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route, } from 'react-router-dom'

import Home from './components/pages'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar2 />
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/login"} component={Login}/>
          <Route exact path={"/signup"} component={Signup}/>
        </Switch>
        <Footer />
      </BrowserRouter>
      </>
  )
}

export default App