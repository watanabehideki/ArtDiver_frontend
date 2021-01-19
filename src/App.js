import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route, Redirect, } from 'react-router-dom'

import Home from './components/pages'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'
import Galleries from './components/pages/Galleries'
import Gallery from './components/pages/Gallery'
import Exhibitions from './components/pages/Exhibitions'
import Exhibition from './components/pages/Exhibition'

function App() {
  const currentUser = localStorage.getItem('user')
  return (
    <>
      <BrowserRouter>
        <Navbar2 />
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
          <Route exact path="/login">
            {currentUser ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/signup">
            {currentUser ? <Redirect to="/" /> : <Signup />}
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      </>
  )
}

export default App