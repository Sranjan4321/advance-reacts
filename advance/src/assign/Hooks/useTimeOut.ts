import { useEffect, useState } from "react"


const  useTimeout=(delay:number)=>{
  
    const [times,setTimes]=useState(false)
    useEffect(()=>{
       let timeout= setTimeout(()=>{
           console.log("ranjan")
         setTimes(true)
        },2*1000)
       
        // return clearTimeout(timeout)
    },[])
return {
  times
}
}
export default useTimeout