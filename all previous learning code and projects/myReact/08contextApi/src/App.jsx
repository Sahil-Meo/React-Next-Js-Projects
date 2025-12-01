import { useState } from 'react'
import './App.css'
import UserContexProvider from './Context/UserContexProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  return (
    <UserContexProvider>
      <h1>New Porject To Learn About Context Api!</h1>
      <Login />
      <Profile />
    </UserContexProvider>
  )
}

export default App
