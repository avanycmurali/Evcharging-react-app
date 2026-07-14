import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddEv from './components/AddEv'
import ViewEv from './components/ViewEv'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/'element={<AddEv/>}/>
      <Route path='/view'element={<ViewEv/>}/>
      </Routes></BrowserRouter>
    </>
  )
}

export default App
