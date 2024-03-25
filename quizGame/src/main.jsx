import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './components/Admin.jsx'
import UserContextProvider from './components/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
    </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>
)
