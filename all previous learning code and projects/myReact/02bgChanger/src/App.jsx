import { useState } from 'react'

function App() {


  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap jsutify-center bottom-12 inset-x-0 px-2 py-4 container' >
        <div className='fixed flex flex-wrap gap-4 jsutify-center bg-white shadow-lg rounded-xl px-3 py-2 m-auto ' >
          <button className='outline-none px-4 py-1 rounded-full bg-Red shadow-lg text-2xl text-white' onClick={()=>setColor('red')} style={{ backgroundColor: 'red' }}> Red</button>
          <button className='outline-none px-4 py-1 rounded-full bg-Red shadow-lg text-2xl text-white' style={{ backgroundColor: 'red' }}> White</button>
          <button className='outline-none px-4 py-1 rounded-full bg-Red shadow-lg text-2xl text-white' style={{ backgroundColor: 'red' }}> Purple</button>
          <button className='outline-none px-4 py-1 rounded-full bg-Red shadow-lg text-2xl text-white' style={{ backgroundColor: 'red' }}> Green</button>
          <button className='outline-none px-4 py-1 rounded-full bg-Red shadow-lg text-2xl text-white' style={{ backgroundColor: 'red' }}> Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full bg-Red shadow-lg text-2xl text-white' style={{ backgroundColor: 'red' }}> Orange</button>
          <button className='outline-none px-4 py-1 rounded-full bg-Red shadow-lg text-2xl text-white' style={{ backgroundColor: 'red' }}> Black</button>
        </div>

      </div>
    </div>
  )
}

export default App
