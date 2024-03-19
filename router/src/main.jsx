import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import App4 from './App4.jsx'
import Navbar from './Navbar.jsx'
import NotFound from './NotFound.jsx'
import User from './User.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/app2" element={<App2 />} />
      <Route path="/app3" element={<App3 />} />
      <Route path="/app4" element={<App4 />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/user/:user" element={<User />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
