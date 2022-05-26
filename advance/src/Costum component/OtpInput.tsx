import { useRef, useState } from "react";

import "./app.css"

type OtpInputType={
    totalInputs:number;
    onChange:(otp:string)=>void;
}


export const OtpInput=({ totalInputs,onChange}:OtpInputType)=>{
    const inputRef=useRef<HTMLInputElement[]>([])
   const [change,setChange]=useState(false)
   const [Otp,setOtp]=useState<string>("")
   
    return <div className={change?"colr":"grays"}>
        {new Array(totalInputs).fill(1).map((_,ind)=>(
            <input onChange={(e)=>{
                setOtp(Otp+e.target.value)
            }} onKeyUp={(e)=>{
                    if(e.code==="Backspace"){
                        if(ind>=1){
                            inputRef.current[ind-1].focus()
                            inputRef.current[ind-1].select()
                            setChange(false)
                        }
                       }else {
                           if(ind<=3){
                            inputRef.current[ind+1].focus()
                           }
                           if(ind===4){
                             setChange(true)
                           }else{
                               setChange(false)
                           }
                       }
                      
                      onChange(Otp)
            }} ref={(elem)=>{
                
                if(inputRef.current&& elem){
                    inputRef.current[ind]=elem
                }
             
            }} className="otpInput" maxLength={1} key={ind}/>
        ))}
    </div>
}

