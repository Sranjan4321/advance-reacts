import React, { useEffect, useState } from 'react'
import axios from 'axios'

type profile={
    avtar_url:string;
    q:string;
    id:string;
    login:string;
    country:string;
    city:string;
}
// const url="https://api.github.com/search/users"
const url="http://localhost:8080/country"
const Country = () => {
    const [text,setText]=useState("")
    const [list,setList]=useState<profile[]>([])
    const [data,setData]=useState<profile[]>([])

    const changehandle=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
        let newlist=list.filter((elm)=> elm.country.includes(text))
         setData(newlist)
       console.log(data)     
    }
    useEffect(()=>{
      axios.get(url).then(({data})=>setList(data))
    //   console.log(list)
    },[])
  return (
    <div>
        <input type="text" value={text} onChange={changehandle} />
        {/* <button onClick={()=>{
           axios.get(url,{
               params:{
                   per_page:5,
                   q:text
               }
           }).then(({data})=>setList(data.items))
        }}>Search</button>
        {list.map((elm)=><div key={elm.id}> {elm.login}</div>)} */}
        <div style={{width:"300px",margin:"auto",maxHeight:"400px",minHeight:"auto",overflow:"scroll"}} >
        {data.map((elm,ind)=><div key={ind}> <div style={{width:"100%",background:"lightgray",margin:"5px 0px"}}><span style={{color:"green",fontWeight:"500"}}>Country:</span>{elm.country}</div><span><span style={{color:"blue",fontWeight:"500"}}>Capital:</span>{elm.city}</span></div>)} 
        </div>
       
    </div>
  )
}

export default Country