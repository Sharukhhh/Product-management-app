
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Signup from './Screens/Signup'
import Login from './Screens/Login'
import Home from './Screens/Home'
import ToastComponent from './Components/ToastComponent'
import Product from './Screens/Product'
import PrivateRoutes from './Components/PrivateRoutes'

function App() {

  return (
    <>
    <ToastComponent/>
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />

        <Route element={<PrivateRoutes/>}>
          <Route path='/home' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
