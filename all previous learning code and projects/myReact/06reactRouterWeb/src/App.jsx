import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import Github from './Components/Github/Github.jsx'
import Footer from './Components/Footer/Footer.jsx'
import User from './Components/User/User.jsx'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {

  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sahil' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/github' element={<Github />} />
          <Route path='User/:userid' element={<User />} />
          <Route path='*' element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
