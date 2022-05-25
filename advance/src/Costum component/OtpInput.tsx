import { useRef, useState } from "react";
import "./app.css"

type OtpInputType={
    totalInputs:number;
    onChange:(otp:string)=>void;
}


export const OtpInput=({ totalInputs,onChange}:OtpInputType)=>{
    const inputRef=useRef<HTMLInputElement[]>([])
   const [Otp,setOtp]=useState<string>("")
   
    return <div>
        <div></div>
        {new Array(totalInputs).fill(1).map((_,ind)=>(
            <input onChange={(e)=>{
                setOtp(Otp+e.target.value)
            }} onKeyUp={(e)=>{
                    if(e.code==="Backspace"){
                        if(ind>=1){
                            inputRef.current[ind-1].focus()
                            inputRef.current[ind-1].select()
                           
                        }
                       }else {
                           if(ind<=2){
                            inputRef.current[ind+1].focus()
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

