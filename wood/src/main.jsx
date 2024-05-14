// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContextProvider from './components/state.jsx'
import Galerey from './pages/galerey.jsx'
import Price from './pages/prise.jsx'
import Contact from './pages/contact.jsx'
import About from './pages/aboutus.jsx'
import Register from './pages/register.jsx'
import { StrictMode } from 'react'
import Login from './pages/login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
    <ContextProvider>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/galerey' element={<Galerey/>}/>
            <Route path='/price' element={<Price/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
    </ContextProvider>
    </StrictMode>
)
