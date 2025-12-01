import { useState } from 'react'
import MainPage from './Components/MainPage'
import Login from './Components/Login'
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/main' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
