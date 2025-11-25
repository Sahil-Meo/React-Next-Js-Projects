import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import LandingPage from './LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <LandingPage /> 
      <Footer />
    </>
  )
}

export default App
