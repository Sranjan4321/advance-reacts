import { useState } from "react"
import "./Tabbuttton.css"
export const TabButton=()=>{
    const [val,setVal]=useState<number>(0)

    let arr=["Lorem ipsum, dolor sit amet consectetur adipisicing elit","Quae sed natus harum aperiam consequatur minima suscipit dolor at! Atque","velit ea fugiat sint impedit molestias repellendus optio, ab itaque! Laborum?"]
    return <div className="main">
    <div>
        <button onClick={()=>setVal(0)}>button1</button>
        <button onClick={()=>setVal(1)}>button2</button>
        <button onClick={()=>setVal(2)}>button3</button>
 
    </div>
    <div className="para">

     {arr[val]}
    </div>
    </div>
}

