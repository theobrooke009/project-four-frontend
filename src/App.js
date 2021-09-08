import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import axios from 'axios'
import Landing from './components/auth/Landing.js'
import Register from './components/auth/Register.js'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
      <Switch>
        <Route path ="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  
  )
}

export default App
