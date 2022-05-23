import React, { useRef, useState } from "react"



 const useTimer=(initTime:number)=>{
     const [time,setTime]=useState(initTime)
     const [flag,setFlag]=useState(false)
     const timeref=useRef<number|undefined>(null)
     const stop=()=>{
        setFlag(true)
        window.clearInterval(timeref.current)
     //    console.log(flag)
       
      }
      const reset=()=>{
        window.clearInterval(timeref.current)
       setTime(initTime)
    }
     const start=()=>{
     timeref.current= window.setInterval (()=>{
            setTime(state=>state-1)

           },1000)
           return ()=> {
            stop()
        }
       }
       
    
    
    
return{
    time,
    start,
    stop,
    reset,

}
}
export default useTimer