import React from 'react'
import Login from './login';
import Home from './home';
import Dashboard from './dashboard';
import Policy from './policy';
import Claim from './claim';
import About from'./about';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Register from './register';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/Login"element={<Login/>}/>
      <Route path="/SignUp"element={<Register/>}/>
      <Route path="/Dashboard"element={<Dashboard/>}/>
      <Route path="/Policy"element={<Policy/>}/>
      <Route path="/Claim"element={<Claim/>}/>
      <Route path="/About"element={<About/>}/>
    </Routes>
  </Router>
  )
}

export default App