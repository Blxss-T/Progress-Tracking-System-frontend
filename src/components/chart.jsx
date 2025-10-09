
import React from 'react'
import { Tooltip, XAxis, BarChart,Bar,YAxis,ResponsiveContainer } from 'recharts'

function Chart() {
  const data =[
    {name:"Monday",contributions:790},
    {name:"Tuesday", contributions:790},
    {name:"Wednesday",contributions:790},
    {name:"Thursday", contributions:890}, 
    {name:"Friday", contributions:90}, 
    {name:"Saturday",contributions:90}, 
    {name:"Sunday", contributions:790}
  ]
  return (
    <div>
      <ResponsiveContainer width="100%"height={300}>
      <BarChart  data={data}>
        <XAxis  dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
         dataKey="contribution" 
         fill="064232"/>
      </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default chart