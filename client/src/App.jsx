import { useState } from 'react'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Signup from './Screens/Signup'
import Login from './Screens/Login'
import Home from './Screens/Home'
import ToastComponent from './Components/ToastComponent'

function App() {

  return (
    <>
    <ToastComponent/>
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
