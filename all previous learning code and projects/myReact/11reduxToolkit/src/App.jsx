import { useState } from 'react'

import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-center mx-auto max-w-xl'> 
        <h1 className='text-center font-bold text-3xl text-gray-700'>New Project With React and Redux-Toolkit</h1>

        <AddTodo />
        <Todo />
      </div>
    </>
  )
}

export default App
