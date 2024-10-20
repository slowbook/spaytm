import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import axios from  'axios'
import {Signup} from './pages/signup'
import {Login} from './pages/Login'
import {Dashboard} from './pages/Dashboard.jsx'
import {SendMoney} from './pages/SendMoney.jsx'

  
  function App() {

    return (
      <>
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/send" element={<SendMoney />} />
          </Routes>
        </BrowserRouter>
        
      </>
    )
  }


export default App
