import React, { useState } from "react";
import { MDBInput } from 'mdb-react-ui-kit';
import SortImg from "./SortImg";

let obj=[];
const sorting=(nums)=>{
    
    let arr=nums.split(' ').map(Number);
    for (var i = 0; i < arr.length; i++) {
        obj[i]=arr;   
    }
}

const ArrayValues=()=>{
    const [name, setName] = useState("1 2 3 4 5");
    const handleSubmit = (event) => {
        event.preventDefault();
        sorting(name);
    }
  
    return (
        <div>
        <div className="Main">
            <h2><i>Welcome to The SortView</i></h2>
            <form onSubmit={handleSubmit}>
                <MDBInput label='Enter Your Numbers Here' type='text' 
                onChange={(e)=>{setName(e.target.value)}} size='lg' />
                <input type="submit" />
            </form>
        </div>
        
        <div className="Images">
            <SortImg myobj={obj}/>
        </div>
        </div>
    )
}
export default ArrayValues;