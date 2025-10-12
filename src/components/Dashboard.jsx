import React from 'react'
import UserGreeting from './userGreeting'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Chart from './chart';


function Dashboard() {
  const navItems={

  }
  return (
    <div className='md:ml-64 min-h-screen rounded-2xl bg-gray-100 p-4 mt-1.5 mr-1'>
      
      {/* Header Section */}
      <div className='flex flex-wrap justify-between items-center p-1 gap-2'>
        <h2 className='text-3xl font-medium'>Dashboard</h2>
        <div className='flex gap-1 flex-wrap'>
          <button className="px-4 py-2 bg-gradient-to-br from-green-950 to-green-700 text-white  p-2 rounded-3xl sm:text-base">
            Add Project
          </button>
          <button className="px-4 py-2 border border-green-950 text-green-950 p-2 rounded-3xl hover:bg-emerald-100 sm:text-base">
            Import
          </button>
        </div>
      </div>

      <p>Plan, prioritize, and accomplish with ease.</p>

      {/* Dashboard Grid Section */}
<div className="p-2 sm:p-4 bg-gray-100">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-full text-base sm:text-lg md:text-xl">

    {/* Total Projects Card */}
    <div className="bg-gradient-to-bl from-green-950 via-green-900 to-green-800 
                    text-white rounded-2xl shadow p-4 min-h[10rem] flex flex-col justify-between">
      <div className='flex justify-between items-center w-full'>
        <p className='text-sm sm:text-base break-words'>Total Projects</p>
        <div className="bg-green-50 text-black p-2 rounded-full hover:text-gray-500">
          <FontAwesomeIcon 
  icon={faArrowUp} 
  className="text-black text-xl inline-block transform rotate-[45deg]" 
/>
        </div>
      </div>
      <h2 className="text-4xl">24</h2>
      <Link to="/projects" className="flex items-center gap-2 hover:underline text-sm text-amber-100">
        <FontAwesomeIcon icon={faPaperclip} size="xs" />
        See your latest project
      </Link>
    </div>

    {/* Other summary cards */}
    <div className="bg-white rounded-2xl shadow p-4 h-40 flex flex-col justify-between">
      <div className='flex  items-center w-full gap-6'>
        <p className='text-sm sm:text-base break-words'>Ended Projects</p>
        <div className="border text-black p-2 rounded-full hover:text-gray-500">
          <FontAwesomeIcon 
          icon={faArrowUp} 
          className="text-black text-xl inline-block transform rotate-[45deg]" 
        />
        </div>
        </div>
        <h2 className="text-4xl">10</h2>
      <Link to="/projects" className="flex items-center gap-2 hover:underline text-sm text-gray-800">
        <FontAwesomeIcon icon={faPaperclip} size="xs" />
        See your latest project
      </Link>
    
    </div>
    <div className="bg-white rounded-2xl shadow p-4 h-40 flex flex-col justify-between ">
     <div className='flex  items-center w-full gap-6'>
        <p className='text-sm sm:text-base break-words'>Running Porjects</p>
        <div className="border text-black p-2 rounded-full hover:text-gray-500">
          <FontAwesomeIcon 
          icon={faArrowUp} 
          className="text-black text-xl inline-block transform rotate-[45deg]" 
        />
        </div>
        </div>
         <h2 className="text-4xl">12</h2>
      <Link to="/projects" className="flex items-center gap-2 hover:underline text-sm text-gray-800">
        <FontAwesomeIcon icon={faPaperclip} size="xs" />
        See your latest project
      </Link>
    </div>
    <div className="bg-white rounded-2xl shadow p-4 h-40 flex flex-col justify-between">
     <div className='flex  items-center w-full gap-6'>
        <p className='text-sm sm:text-base break-words'>Pending projects</p>
        <div className="border text-black p-2 rounded-full hover:text-gray-500">
          <FontAwesomeIcon 
          icon={faArrowUp} 
          className="text-black text-xl inline-block transform rotate-[45deg]" 
        />
        </div>
        </div>
         <h2 className="text-4xl">2</h2>
      <Link to="/projects" className="flex items-center gap-2 hover:underline text-sm text-gray-800">
        <FontAwesomeIcon icon={faPaperclip} size="xs" />
        On Discuss
      </Link>
    </div>
    

    {/* Middle Row */}
    <div className=" col-span-1 sm:col-span-2 bg-white rounded-2xl shadow p-4 min-h-[18rem] flex items-center justify-center">
      <Chart />
    </div>
    <div className="bg-white rounded-2xl shadow p-4 h-40 flex flex-col justify-between">
      <h2 className='text-sm sm:text-base break-words'>Reminders</h2>
      <span className='text-green-900 font-semibold'>Meeting with Arc Company</span>
      <p className='text-sm text-gray-700'>Time: 2:00pm - 4:00pm </p>
      <button className='flex items-center text-sm text-white bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-1 gap-2'>
        <FontAwesomeIcon icon={faVideoCamera} size='md' />
        <p className='text-sm sm:text-base break-words'>Start the meeting</p></button>
    </div>
    <div className="bg-white row-span-2 rounded-2xl shadow p-4  flex items-center justify-center">
      Projects
    </div>

    {/* Bottom Row  */}
    <div className="bg-white rounded-2xl shadow p-4 h-40 flex items-center justify-center">
      Team Collaboration
    </div>
    <div className="bg-white rounded-2xl shadow p-4 h-40 flex items-center justify-center">
      Project Progress
    </div>
    <div className="bg-gradient-to-bl from-green-950 to-green-900 rounded-2xl shadow p-4 h-40 flex items-center justify-center">
      Time Tracker
    </div>
  </div>
</div>

    </div>
  )
}

export default Dashboard
