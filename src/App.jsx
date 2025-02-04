import React from 'react'
import Loader from './components/Loader'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='bg-[var(--main-bg)]'>
      <Loader/>
      <NavBar/>
    </div>
  )
}

export default App
