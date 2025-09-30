import React from 'react'
import UserGreeting from './userGreeting'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Dashboard() {
  return (
    <div className='ml-64 min-h-screen rounded-2xl bg-gray-100 p-4 mt-1.5 mr-1'>
      
      {/* Header Section */}
      <div className='flex flex-wrap justify-between p-1 '>
        <h2 className='text-3xl font-medium'>Dashboard</h2>
        <div className='flex gap-1 flex-wrap'>
          <button className="w-42 bg-gradient-to-br from-green-950 to-green-700 text-white p-2 rounded-3xl">
            Add Project
          </button>
          <button className='w-40 border-3 border-green-950 text-green-950 p-2 rounded-3xl hover:bg-emerald-100'>
            Import
          </button>
        </div>
      </div>

      <p>Plan, prioritize, and accomplish with ease.</p>

      {/* Dashboard Grid Section */}
      <div className="p-6 bg-gray-100 min-h-screen">
        
        {/* 
          🔥 Enhanced grid:
          - 1 column on mobile
          - 2 columns on small screens
          - 4 columns on desktops
          - full width with w-full
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-screen text-xl">
          
          {/* Total Projects Card */}
          <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center justify-between ">
            <div className='flex justify-between items-center w-full'>
              <p className="text-black">Total Projects</p>
              <div className="bg-green-50 text-green-600 p-2 rounded-full hover:text-gray-500">
                <FontAwesomeIcon icon={faFolder} size="md" />
              </div>
            </div>
            <h2 className="text-5xl text-black mt-2">24</h2>
            <div className='flex flex-row items-center justify-center'>
             <Link to="/projects" className="flex items-center gap-2 hover:underline">
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    size="xs"
                    className="text-gray-600 hover:text-blue-500"
                  />
                  <p className="text-sm text-gray-800">See your latest project</p>
            </Link>
            </div>
          </div>

          {/* Other top cards */}
          <div className="bg-white rounded-2xl shadow p-4">Ended Projects</div>
          <div className="bg-white rounded-2xl shadow p-4">Running Projects</div>
          <div className="bg-white rounded-2xl shadow p-4">Pending Projects</div>

          {/* Middle Row */}
          <div className="col-span-2 bg-white rounded-2xl shadow p-4">
            Project Analytics
          </div>
          <div className="bg-white rounded-2xl shadow p-4">Reminders</div>
          <div className="bg-white row-span-2 rounded-2xl shadow p-4">Projects</div>

          {/* Bottom Row */}
          <div className="bg-white rounded-2xl shadow p-4">
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
