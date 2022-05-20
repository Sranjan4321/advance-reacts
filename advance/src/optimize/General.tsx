import React, { useState,useMemo } from "react"


function General(){
    const [text,setText]=useState("")
     const fibo=(n:number):number=>{
         console.log("change")
         if(n<=1){
             return n
         }else{
             return fibo(n-1)+fibo(n-2)
         }
     }
     const memoised=useMemo(()=>{
         return fibo(Number(text))
     },[text])
     const calcfibo=()=>{
        
    //    fibo(Number(text))
       console.time("t1")
       console.log("nth fibo",memoised)
       console.timeEnd("t1")
     }
    
    return(
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <button onClick={calcfibo }>Calculate</button>
        </div>
    )
}

export default General