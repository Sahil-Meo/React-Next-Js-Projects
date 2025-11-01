import React from 'react'
import { useSelector } from 'react-redux';

function LandingPage() {
  const count = useSelector()
  return (
    <div className='h-[60vh] flex items-center justify-center'>
      <h1 className="text-4xl text-purple-600 text-center">Learning React Redux Toolkit</h1>
      <h3 className="text-2xl">Count 0</h3>
    </div>
  )
}

export default LandingPage;
