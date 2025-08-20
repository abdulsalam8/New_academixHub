import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './component/Landing/Landing'

function App() {
  const [count, setCount] = useState(0)

  const apps = ()=>{
    alert("hell")

  }

  // apps()
  return (
   <div>
    <Landing />
  </div>
  )
}

export default App
