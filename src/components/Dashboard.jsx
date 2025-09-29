import React from 'react'
import UserGreeting from './userGreeting'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Dashboard() {
  return (
    <div className='ml-64 h-screen rounded-2xl bg-gray-100 p-4 mt-1.5 mr-1'>
        {/* {function userGreet (name){
            return <h1>Welcome {name}</h1>
        }} */}
        <div className='flex justify-between p-1 '>
           <h2 className='text-3xl font-medium'>Dashboard</h2>
            <div className='flex gap-1 flex-wrap-reverse'>
            <button className="w-42  bg-gradient-to-br from-green-950 to-green-700 text-white  p-2 rounded-3xl">
                Add Project
            </button>
            <button className='w-40 border-3 border-green-950 text-green-950 p-2 rounded-3xl'>Import</button>
            </div>
        </div>
        <p>Plan, prioritize, and accomplish with ease.</p>
         <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-4 gap-3">
        {/* Top row - Stats Cards */}
        <div className="bg-white rounded-2xl shadow p-4">Total Projects</div>
        <div className="bg-white rounded-2xl shadow p-4">Ended Projects</div>
        <div className="bg-white rounded-2xl shadow p-4">Running Projects</div>
        <div className="bg-white rounded-2xl shadow p-4">Pending Projects</div>

        {/* Middle Row */}
        <div className="col-span-2 bg-white rounded-2xl shadow p-4">
          Project Analytics
        </div>
       
          <div className="bg-white rounded-2xl shadow p-4">Reminders</div>
          <div className="bg-white row-span-2 rounded-2xl shadow p-4 ">Projects</div>
       

        {/* Bottom Row */}
        <div className="col-span-1/2 bg-white rounded-2xl shadow p-4">
          Team Collaboration
        </div>
        <div className="bg-white rounded-2xl shadow p-4">Project Progress</div>
        <div className="bg-white rounded-2xl shadow p-4">Time Tracker</div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard