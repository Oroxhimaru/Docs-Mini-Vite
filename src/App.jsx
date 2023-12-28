import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import Frontpage from './components/Frontpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Frontpage />
      </div>
    </>
  )
}

export default App
