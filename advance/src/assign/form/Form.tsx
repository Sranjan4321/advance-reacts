// import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios'
import React, { ChangeEvent, useEffect, useState } from 'react'
import {Display} from './Display';

export type profile={
    name:string;
    modal:number;
    myear:string;
    system:string;
    width:number;
    height:number;
    price:number;
    id:number;
}

const Form = () => {
const [data,setData]=useState({})
const [list,setList]=useState<profile[]>([])
// console.log(list)
    const handlechange=(e: React.FormEvent<HTMLInputElement>)=>{
       setData({...data,[e.currentTarget.name]:e.currentTarget.value})
    //    console.log(data)
    }
   const handleFilter=(e:ChangeEvent<HTMLSelectElement>)=>{
    let val=e.currentTarget.value
    if(val==="HtoL"){
        
    }
   }
    useEffect(()=>{
    axios.get("http://localhost:8000/forms").then(({data})=>setList(data))
    },[data])
  return (
    <div>
        <form>
            <div>
            <input type="text" name="name" id="name" placeholder='Gadget Name' onChange={handlechange}/>
            </div>
            <div>
            <input type="text" name="modal" id="modal" placeholder='Modal no' onChange={handlechange}/>
            </div>
            <div>
            <input type="number" id="myear" name="myear" placeholder="Make Year" onChange={handlechange} />
            </div>
            <div>
            <input type="text" name="system" id="system" placeholder='Operating system'onChange={handlechange}/>
            </div>
            <div>
            <input type="number" name="width" id="width" placeholder='Screen Width'onChange={handlechange} />
            </div>
            <div>
            <input type="number" name="height" id="height" placeholder='screen Height'onChange={handlechange}/>
            </div>
           <div>
           <input type="number" name="price" id="price" placeholder='Price' onChange={handlechange}/>
           </div>
            <button onClick={(e)=>{
                e.preventDefault()
                axios.post("http://localhost:8000/forms",{
                    ...data
                })
            }}>Submit</button>
        </form>

        <div>
       
     <select name="pets" id="pet-select" onChange={handleFilter}>
    <option value="">--Please choose an option--</option>
    <option value="LtoH">Price Low to High</option>
    <option value="HtoL">Price High to Low</option>
    
</select>
        </div>
       
        <div>
        <table > 
     
     <tbody>
            <tr >
                <th>Name</th>
                <th>Modal</th>
                <th>Myear</th>
                <th>System</th>
                <th>width</th>
                <th>Height</th>
                <th>Price</th>
            </tr>
           
             { list.map((elem)=>  <Display key={elem.id} {...elem}/>)}
          
        </tbody>
     </table>
          
        </div>
      
    </div>
  )
}

export default Form