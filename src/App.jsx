import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import CreateProfile from './components/CreateProfile'
import Select from './components/Select'
import EmailPage from './components/EmailPage'
import {Outlet} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=''>
      <Outlet/>
    </div>
    </>
  )
}

export default App
