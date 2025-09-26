import React from 'react'
import UserGreeting from './userGreeting'

function Dashboard() {
  return (
    <div className='ml-64 h-screen rounded-2xl bg-gray-200 p-4 mt-1.5 mr-1'>
        {/* {function userGreet (name){
            return <h1>Welcome {name}</h1>
        }} */}
        <div className='flex justify-between p-1 '>
            <h2>Dashboard</h2>
            <div className='flex gap-1 flex-wrap-reverse'>
            <button className="w-42  bg-gradient-to-br from-green-950 to-green-700 text-white  p-2 rounded-3xl">Import</button>
            <button className='w-40 border-3 border-green-950 text-green-950 p-2 rounded-3xl'>Import</button>
            </div>
            
        </div>
    </div>
  )
}

export default Dashboard