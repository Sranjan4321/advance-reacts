import React, { useEffect,useState } from 'react'
import axios from 'axios';
import "./display.css"
import { profile } from './Form';

export const Display = (elem:profile) => {
    console.log(elem.myear)
    // const [list,setList]=useState([])
    // useEffect(()=>{
    // axios.get("http://localhost:8000/forms").then(({data})=>setList(data))
    // },[])
   
  return (
    <>
      
      <tr key={elem.id}> 
              <td>{elem.name}</td>
                <td>{elem.modal}</td>
                <td>{elem.myear}</td>
                <td>{elem.system}</td>
                <td>{elem.width}</td>
                <td>{elem.height}</td>
                <td>{elem.price}</td>
                </tr>  
    </>
  )
}

