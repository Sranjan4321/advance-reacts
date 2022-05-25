// import { isVisible } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "./Accordian.css"
export type Element={
    title:string;
    dec:string;
    // index:number
}
type AccordianType={
    data:Element[],
   
}

export const Accordian=({data}:AccordianType)=>{
    const [opend,setOpend]=useState<number>(0)
    const handleOpen=(index:number)=>{
         setOpend(index)
    }
   console.log(data)
    
    return(
        <div>
            {data.map((elem,index)=><Card key={index} title={elem.title} des={elem.dec} index={index} IsVisible={index===opend} handlOpen={handleOpen}/>
            )}
           
        </div>
    )
}


type CardProps={
    title:string;
    des:string;
    index:number
    IsVisible:boolean;
    handlOpen:(i:number)=>void;
}
const Card=({title,des,index,IsVisible,handlOpen}:CardProps)=>{
return <div className="container">
    <h4 onClick={()=>handlOpen(index)}>{title}</h4>
    {IsVisible&&<div>{des}</div>}
</div>
}