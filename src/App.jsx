import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from '@mui/material'
import ListUsers from './components/ListUsers'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListUsers />

    </>
  )
}

export default App
