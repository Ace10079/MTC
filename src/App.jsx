import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import RegisterPage from './Components/RegisterPage'
import Navbar from './Components/Navbar'
import Dasboard from './Dasboard'
import CartPage from './Components/CartPage'
import BillingPage from './Components/BillingPage'


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<LoginPage/>}></Route>
   <Route path="/signup" element={<RegisterPage/>}></Route>
   <Route path="/navbar" element={<Navbar/>}></Route>
   <Route path="/dashboard" element={<Dasboard/>}></Route>
   <Route path="/cart" element={<CartPage/>}></Route>
   <Route path="/billing" element={<BillingPage/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
