import React, { useState } from 'react'
// import { setTextRange } from 'typescript'
// import axios from 'axios'
// import { stringify } from 'querystring';
import { useFetch } from './useFetch';
import { useDebouncedCallback } from "@react-hookz/web"
// import {DebounceInput} from "react-debounce-input"
// import { set } from 'react-hook-form';
const url="https://api.github.com/search/users"
// const urls="http://localhost:8080/country"



export type User={
    id:number;
    login:string;
    avatar_url:string;
}
const Githubs= () => {

   const [text,setText]=useState("")
   const {data,err,loading}=useFetch<User>(url,{
       per_page:5,
       q:text || "masai-codes"
   })
  
   const onChangeDebounced=useDebouncedCallback((e)=>setText(e.target.value),[],1000,0)
  return (
    <div>
        <input  type="text"  onChange={onChangeDebounced} />
        {/* <button onClick={()=>
            
                axios.get(url,{
                    params:{
                        per_page:5,
                        q:text
                        
                    }
            })
            
        }>Search</button> */}

        {loading?<div>Loading...</div>:err?<div>Something went wrong</div>: data.map((elm)=><div key={elm.id}><div>{elm.login}</div> <div><img width={200}src={elm.avatar_url} alt="github profile" /></div></div>)}
    </div>
  )
}

export default Githubs
