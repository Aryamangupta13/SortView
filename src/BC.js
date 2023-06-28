import React from "react";
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis} from 'recharts'

// const Array=[
//   {name:"python",student:13},
//   {name:"Javascript",student:15,},
//   {name:"php",student:5},
//   {name:"Java",student:10},
//   {name:"c#",student:9},
//   {name:"Cpp",student:50}
// ]

const BC=(props)=>{
  const Array=props.myprp;
  console.log(Array);
  return(<div>
    <ResponsiveContainer width={1000} aspect={3}>
      <BarChart data={Array} width={500} height={500}>
      <XAxis dataKey='name'/>
      <YAxis/>
        <Bar dataKey="student"/>
      </BarChart>
    </ResponsiveContainer>
  </div>)
}
export default BC;