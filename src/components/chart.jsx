
import React from 'react'
import { Tooltip, XAxis, YAxis,ResponsiveContainer } from 'recharts'

function chart() {
  const data =[
    {name:"Monday", contributions:790},
    {name:"Tuesday", contributions:790},
    {name:"Wednesday", contributions:790},
    {name:"Thursday", contributions:790}, 
    {name:"Friday", contributions:790}, 
    {name:"Saturday", contributions:790}, 
    {name:"Sunday", contributions:790}
  ]
  return (
    <div>
      <ResponsiveContainer width="100%"height={300}>
      <BarChart  data={data}>
        <XAxis  dataKey="name"/>
        <YAxis />
        <Tooltip />
        <legend />
        <Bar>
          
        </Bar>

      </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default chart