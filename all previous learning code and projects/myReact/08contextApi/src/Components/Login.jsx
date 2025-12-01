import React,{useState, useContext} from 'react'
import userContext from '../Context/UserContext'

function Login() {
    const[username, setUserName]=useState('')
    const[password, setPassword]=useState('')
    const {setUser} = useContext(userContext)
    const handleSubmit =(e)=>{
      e.preventDefault()
      setUser({username, password})
    }
  return (
    <div>
      <h1>Login form</h1>
      <input value={username} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='username' />
      {' '}
      <input value={password} onChange={(e)=> setPassword(e.target.password)} type="text" placeholder='Password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
