import React, { useRef, useState } from "react"



 const useTimer=(initTime:number)=>{
     const [time,setTime]=useState(initTime)
     const [flag,setFlag]=useState(false)
    //  const timeref=useRef<HTMLInputElement>(null)
   
     const start=()=>{
      let timmers= setInterval (():void=>{
            setTime(state=>state-1)
          console.log("ranjan")
          console.log(flag)
            if(flag){
                console.log(flag)
               return  clearInterval(timmers)
            }
           },1000)
        
       }
       
     const stop=()=>{
       setFlag(true)
      
    //    console.log(flag)
      
     }
     const reset=()=>{
         setFlag(true)
        setTime(initTime)
     }
    
return{
    time,
    start,
    stop,
    reset,

}
}
export default useTimer