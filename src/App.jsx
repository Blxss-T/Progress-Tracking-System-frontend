import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Mails from './Pages/Mails';
import Notification from './Pages/Notification';
import Sidebar from './components/sideBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='bg-white'>
   <BrowserRouter >
    <Navbar />
    <Sidebar />
    <Dashboard />
    <Routes>
        <Route path="/mail" element={<Mails />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
   </BrowserRouter>
   </div>
   
  )
}


export default App