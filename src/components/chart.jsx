
import React from 'react'
import { Tooltip, XAxis, BarChart,Bar,YAxis,ResponsiveContainer } from 'recharts'

const weekDays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
function Chart() {
  const data =[
    {contributions:790},
    { contributions:790},
    {contributions:790},
    { contributions:890}, 
    { contributions:90}, 
    {contributions:90}, 
    { contributions:790}
  ]
  return (
    <div>
      <ResponsiveContainer width="100%"height={300}>
      <BarChart  data={data}>
        <XAxis  dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="contribution" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default chart