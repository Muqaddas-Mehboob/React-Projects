import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Features from './Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-yellow-300 text-black p-4 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 
    hover:scale-110 hover:bg-indigo-500 ... 
    font-mono m-4'>Tailwind Test</h1>

    <button class="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 
    hover:scale-110 hover:bg-indigo-500 ...">Save Changes</button>

    <Features iconName = "Home" paragraph='This is home tab'/>
    </>
  )
}

export default App
